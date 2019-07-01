import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    pokemons_search: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(resp => resp.json())
    .then(resp => {
      // console.table(resp)
      this.setState({
        pokemons: resp,
        pokemons_search: resp
      })
    })
  }

  newPokemon = (e)=> {
    e.preventDefault()

    let new_pm = {
      name: '',
      stats: [{name: 'hp', value: e.target.hp.value}],
      sprites: {front: e.target.frontUrl.value, back: e.target.backUrl.value}
    }

    fetch('http://localhost:3000/pokemon',{
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( new_pm )
    })
    .then(resp => resp.json())
    .then(resp => {
      let new_pm_arr = this.state.pokemons.push(new_pm)
      this.setState({ pokemons: new_pm_arr })
      // this.forceUpdate()
    })

    e.target.reset()
  }

  searchHandler = (e, { value })=> {
    let results = this.state.pokemons
    if(value) results = results.filter(pm => pm.name.startsWith(value))
    this.setState({ pokemons_search: results })
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(this.searchHandler, 500)} showNoResults={false} placeholder=" Search for Pokemon!" />
        <br />
        <PokemonCollection pokemons={this.state.pokemons_search} />
        <br />
        <PokemonForm newPokemon={this.newPokemon} />
      </div>
    )
  }
}

export default PokemonPage
