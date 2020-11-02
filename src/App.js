import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';



class App extends Component{
  constructor() {
    super();
    this.state= {
      monsters:[],
      searchField: ''
      
    };
  }
  componentDidMount(){
    // here , we are fetching a request for data 
    fetch('https://jsonplaceholder.typicode.com/users')
    // here, we receive it in json format
    .then(response => response.json())
    //  we store the above fetched data into users variable
    .then(users => this.setState({ monsters:users }) )
  }
  render() {
    const { monsters, searchField } = this.state;
    // includes checks whether the given string matches or not.
    const filteredMonsters= monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase()))
    

  return (
    <div className="App">
    <h1>Monsters Rolodex</h1>
      {/*  provides a search box */}
      <SearchBox 
       placeholder='search monsters'
      //  Synthetic events are events which occur when our DOM changes like onChange.
       handleChange={e => this.setState({ searchField : e.target.value })}
      />
      <CardList monsters={filteredMonsters} />
    </div>
    
  );
}
}
export default App;
