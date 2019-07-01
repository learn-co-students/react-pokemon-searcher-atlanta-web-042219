import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

const renderPokemons = (props) => 
  props.pokemons.map(pokemon => 
    <PokemonCard 
      key={pokemon.id} 
      pokemon={pokemon} 
    />
  )

class PokemonCollection extends React.Component {
  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {renderPokemons(this.props)}
      </Card.Group>
    )
  }
}

export default PokemonCollection
