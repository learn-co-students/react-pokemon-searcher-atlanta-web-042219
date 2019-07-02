import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  constructor() {
    super()
  
    this.state = {
       cardFlipped: false
    }
  }
  
  flipCard =() => {

    this.setState({ cardFlipped: !this.state.cardFlipped})
  }


  render() {
    // console.log(this.props)
    return (
      <Card onClick={this.flipCard}>
        <div>
          <div className="image" >
            <img src={this.state.cardFlipped ? this.props.pokemon.sprites.back : this.props.pokemon.sprites.front}  alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.stats.find(stat=> stat.name === 'hp').value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
