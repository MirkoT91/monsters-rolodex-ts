import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import './App.css';

import SearchBox from './components/search-box/search-box.component';

const App = () => {

  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((users) => setMonsters(users));

  }, []);
  
  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    })
    setFilterMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }




  return (
    <div className="App">
    
    <h1 className='app-title'>Monsters Rolodex</h1>

    <SearchBox 
      className = {'search-box'}
      onChangeHandler={onSearchChange}
      placeholder={'Search monster'}
    />
    <CardList monsters={filteredMonsters}/>
    </div>
  );
}

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters : [],
//       searchField: '',
//     };
//   }

//   componentDidMount(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((users) => this.setState(() => {
//       return {monsters:users}
//     }
//     ,() => {
//       console.log(this.state);
//     }
//     ),
//     );
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchField };
//     })
//   }

//   render() {

//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//       });
    
    
//   }
// }

export default App;
