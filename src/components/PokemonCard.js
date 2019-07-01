import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    showFront: true
  }

  handleClick = () => {
    this.setState({ showFront: !this.state.showFront })
  }

  render() {
    return (
      <Card onClick={e => this.handleClick()}>
        <div>
          <div className="image">
            <img alt="oh no!" src={this.state.showFront ? this.props.pokemon.sprites.front : this.props.pokemon.sprites.back} />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.stats.find(stat => stat.name === 'hp').value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
