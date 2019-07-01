import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  constructor() {
    super()
    this.state = {
      pokemons: [],
      filteredPokemons: null
    }
  }

  searchPokemon = (e, {value}) => {
    this.setState({filteredPokemons: this.state.pokemons.filter(pokemon => pokemon.name.includes(value))})
  }

  fetchPokemon() {
    fetch("http://localhost:3000/pokemon")
    .then(res => res.json())
    .then(data => this.setState({pokemons: data}, 
      ()=>console.log("state", this.state)))
  }

  componentDidMount() {
    this.fetchPokemon()
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(this.searchPokemon, 500)} showNoResults={false} />
        <br />
        <PokemonCollection  pokemons={this.state.filteredPokemons ? this.state.filteredPokemons : this.state.pokemons} />
        <br />
        <PokemonForm />
      </div>
    )
  }
}

export default PokemonPage
