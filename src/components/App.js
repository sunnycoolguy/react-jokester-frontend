import React from 'react';
import Login from './Login.js';
import Jokester from './Jokester.js';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      currentUser: ''
    }
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
  }

  handleLogin(currentUser){
    this.setState({
      currentUser
    });
  }

  handleSignOut(){
    this.setState({
      currentUser : ''
    })
  }

  render(){
    return (
      <Router>
        <Route path='/' exact render={(props) => <Login {...props} onLogin={this.handleLogin} currentUser={this.state.currentUser}/>}/>
        <Route path='/jokes' render={(props) => <Jokester {...props} onSignOut={this.handleSignOut} currentUser={this.state.currentUser}/>}/>
      </Router>
    );
  }
}

export default App;