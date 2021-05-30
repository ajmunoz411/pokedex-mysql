import React from 'react';
import TypeOption from './TypeOption.jsx';
import PokeEntry from './PokeEntry.jsx';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokeList: [],
      typesList: []
    };
    this.getAllPokemon = this.getAllPokemon.bind(this);
    this.getAllTypes = this.getAllTypes.bind(this);
  }

  componentDidMount() {
    this.getAllPokemon();
    this.getAllTypes();
  }

  getAllPokemon() {
    axios.get('/api/pokemon')
    .then(data => {
      this.setState({
        pokeList: data.data
      });
      // console.log('thisstate pokemon', this.state.pokeList);
    })
    .catch(err => {
      console.log('error getting all pokemon', err);
    });
  }

  getAllTypes() {
    axios.get('/api/types')
    .then(data => {
      this.setState({
        typesList: data.data
      });
      // console.log('this types', this.state.typesList);
    })
    .catch(err => {
      console.log('err getting all types', err);
    })
  }


  render() {
    return (
      <div>
        <h1>Fullstack Pokedex!</h1>
        <button>Show All</button>
        <select id="types">
          <option>Sort by Type</option>
          {this.state.typesList.map(type => (
            <TypeOption type={type.type} key={type.id} />
          ))}
        </select>
        <div>
          {this.state.pokeList.map(pokemon => (
            <PokeEntry pokemon={pokemon} key={pokemon.id}/>
          ))}
        </div>
      </div>
    )
  }

}

// const App = () => (
//   <div>
//     <h1>Fullstack Pokedex!</h1>
//     <button>Show All</button>
//     <select id="types">
//       <option>Sort by Type</option>
//       <option>Grass</option>
//       <option>Fire</option>
//       <option>Water</option>
//     </select>
//     <div>
//       <h3>Bulbasaur</h3>
//       <img src="http://vignette4.wikia.nocookie.net/nintendo/images/4/43/Bulbasaur.png/revision/latest?cb=20141002083518&path-prefix=en" />
//     </div>
//     <div>
//       <h3>Ivysaur</h3>
//       <img src="http://vignette3.wikia.nocookie.net/nintendo/images/8/86/Ivysaur.png/revision/latest?cb=20141002083450&path-prefix=en" />
//     </div>
//     <div>
//       <h3>Venusaur</h3>
//       <img src="http://vignette2.wikia.nocookie.net/nintendo/images/b/be/Venusaur.png/revision/latest?cb=20141002083423&path-prefix=en" />
//     </div>
//   </div>
// )

export default App;