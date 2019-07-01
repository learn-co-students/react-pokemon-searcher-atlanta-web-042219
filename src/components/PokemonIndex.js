import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

const API = `http://localhost:3000/pokemon`

class PokemonPage extends React.Component {
  state = {
    pokemons: [],
    filteredMons: null,
    update: false
  }

  componentDidMount() {
    fetch(API)
      .then(res => res.json())
      .then(data => this.setState({ pokemons: data, update: false }))
  }

  searchPokemon = (e, { value }) => {
    this.setState({ filteredMons: this.state.pokemons.filter(pokemon => pokemon.name.includes(value)) })
  }

  formUpdate = () => {
    this.setState({ update: true })
  }

  addPokemon = (pokemon) => {
    this.setState({ pokemons: [...this.state.pokemons, pokemon] })
  }
  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={
          _.debounce(this.searchPokemon, 500)}
          showNoResults={false} />
        <br />
        <PokemonCollection pokemons={this.state.filteredMons ? this.state.filteredMons : this.state.pokemons} />
        <br />
        <PokemonForm update={this.formUpdate} addPokemon={this.addPokemon} />
      </div>
    )
  }
}

export default PokemonPage
