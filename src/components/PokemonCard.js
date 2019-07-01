import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  render() {
    // console.log('pokemon card props:', this.props)

    return (
      <Card onClick={() => this.props.showBack(this.props.pokemon)} >
        <div>
          <div className="image">
            <img 
              alt="oh no!" 
              src={this.props.pokemon.displayingFront ? this.props.pokemon.sprites.front : this.props.pokemon.sprites.back}
            />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name.toUpperCase()}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              HP: {this.props.pokemon.stats.map(stat => stat.name === 'hp' ? stat.value : null)}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
