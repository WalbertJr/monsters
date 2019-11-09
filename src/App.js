import React/*, {Component}*/ from 'react';
//import logo from './logo.svg';
import './App.css';

import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        /*{
          name: 'Frankenstein',
          id: 'asc1'
        },
        {
          name: 'Dracula',
          id: 'asr2'
        },
        {
          name: 'Zombie',
          id: 'as1w'
        }*/
      ],
      searchField: ''
      //string: 'Hello Walbert'
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
    //console.log(response)

  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value});
  }

  render() {
    const { monsters, searchField} = this.state;
    /*const monsters = this.state.monsters;
    const searchField = this.state.monsters;*/
    const filteredMonsters = monsters.filter(monster => 
        monster.name.toLowerCase().includes(searchField.toLowerCase())
      );
    
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder='search monsters' handleChange={this.handleChange}/>
        
        <CardList monsters=/*{this.state.monsters}*/{filteredMonsters} >
        </CardList>
      </div>
    );
  }
}
//import { from } from 'rxjs';

export default App;