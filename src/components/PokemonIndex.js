import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

const API = 'http://localhost:3000/pokemon'

class PokemonPage extends React.Component {
  constructor() {
    super()
    this.state = {
      pokemon: []
    }
  }

  componentDidMount() {
    return fetch(`${API}?_limit=12`)
    .then(resp => resp.json())
    .then(data => {
      let pokemonArray = data.map(pokemon => {return {...pokemon, displayingFront: true}})
      this.setState({pokemon: pokemonArray})
    })
  }

  showBack = (pokemonObject) => {
    let pokemonArray = this.state.pokemon.map(pokemon => {
      if (pokemon.id === pokemonObject.id && pokemonObject.displayingFront === true) {
        pokemonObject.displayingFront = false
        return pokemon
      }
      else if (pokemon.id === pokemonObject.id && pokemonObject.displayingFront === false) {
        pokemonObject.displayingFront = true
        return pokemon
      }
      else return pokemon
    })

    this.setState({pokemon: pokemonArray})
  }

  onSearchChange = (searchData, e) => {
    // console.log(searchData)
    console.log('onSearchChange:', e.value)

    let pokemonArray = this.state.pokemon.filter(pokemon => {
      if (pokemon.name === e.value) return pokemon
    })

    console.log(pokemonArray)

    this.setState({pokemon: pokemonArray})
  }


  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(this.onSearchChange, 700)} showNoResults={false} />
        <br />
        <PokemonCollection allPokemon={this.state.pokemon} showBack={this.showBack} />
        <br />
        <PokemonForm />
      </div>
    )
  }
}

export default PokemonPage
