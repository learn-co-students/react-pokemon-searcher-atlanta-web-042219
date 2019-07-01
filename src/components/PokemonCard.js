import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  constructor(props){
    super(props)
    this.state = { sprite: 'front' }
  }

  render() {
    return (
      <Card onClick={(e)=> this.setState({ sprite: this.state.sprite === 'front' ? 'back' : 'front' })}>
        <div>
          <div className="image">
            <img src={this.props.pm.sprites[this.state.sprite]} draggable="false" alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.pm.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pm.stats.filter(stat => stat.name === 'hp')[0].value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
