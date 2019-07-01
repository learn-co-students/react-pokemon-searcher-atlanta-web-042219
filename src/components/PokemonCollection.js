import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

	genPokemonCards = () =>{
		return this.props.pokemons.map(pm => <PokemonCard key={pm.id} pm={pm} />)
	}

  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.genPokemonCards()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
