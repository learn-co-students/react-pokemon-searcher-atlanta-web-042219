import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  constructor(props) {
    super(props)
  
    this.state = {
      pokemon: [],
      filteredPokemon: null
    }
  }

  componentDidMount(){

    fetch("http://localhost:3000/pokemon")
    .then(res => res.json())
    .then(data => {
      console.log(data)
      this.setState({ pokemon: data })
    })
  }

  

  sendData =(newPokemon) => {
    console.log("new new",newPokemon)
    fetch("http://localhost:3000/pokemon", {
      method: 'POST', 
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newPokemon)
    }).then(res => res.json())
    .then(resp => { this.setState({
      pokemon: [...this.state.pokemon, resp]
    })})

    
    // .then(this.componentDidMount())

  }

  searchPokemon=(e, {value})=> {

    this.setState({filteredPokemon:  this.state.pokemon.filter(pokemon =>  pokemon.name.includes(value))})
  }
 
  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(this.searchPokemon, 500)} showNoResults={false} />
        <br />
        <PokemonCollection pokemonList={this.state.filteredPokemon ? this.state.filteredPokemon : this.state.pokemon}/>
        <br />
        <PokemonForm sendData={this.sendData}/>
      </div>
    )
  }
}

export default PokemonPage
