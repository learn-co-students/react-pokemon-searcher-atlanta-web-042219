import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {

  state = {hidden: true}

  // constructor(props){
  //   super(props)
  // }


  render(){
    return (
      <div>
        <Form.Button onClick={(e)=> this.setState({ hidden: !this.state.hidden })}><h3>Add a Pokemon!</h3></Form.Button>
        <Form id="poke-form" hidden={this.state.hidden} onSubmit={this.props.newPokemon}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" name="name" placeholder=" Name" />
            <Form.Input fluid label="hp" name="hp" placeholder=" HP" />
            <Form.Input fluid label="Front Image URL" name="frontUrl" placeholder=" url" />
            <Form.Input fluid label="Back Image URL" name="backUrl" placeholder=" url" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
