import React from 'react';

class PokeEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <h3>{this.props.pokemon.name}</h3>
        <p>Type: {this.props.pokemon.type} </p>
        <img src={this.props.pokemon.img} />
      </div>
    )
  }

}



export default PokeEntry;