import React from 'react';
import JokeList from './JokeList.js';
import NavBar from './NavBar.js';
import Login from './Login.js';
import Jokester from './Jokester.js';
import JokeForm from './JokeForm.js'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
class App extends React.Component{
  render(){
    return (
      <Router>
        <Route path='/' exact component={Login}/>
        <Route path='/jokes' component={Jokester}/>
      </Router>
    );
  }
}

export default App;