import React from 'react';
import JokeList from './JokeList.js';
import NavBar from './NavBar.js';
import Login from './Login.js';

class App extends React.Component{
  render(){
    return (
      <div>
        <Login/>
      </div>
    );
  }
}

export default App;