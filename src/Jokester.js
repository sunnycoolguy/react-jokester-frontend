import React from 'react';
import NavBar from './NavBar.js';
import JokeList from './JokeList.js';
import JokeForm from './JokeForm.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class Jokester extends React.Component {
    render(){
        return (
            <Router>
                <NavBar/>
                <JokeForm/>
                {/*
                <Route path='/' exact component={JokeList}/>
                <Route path='/:userId' exact component={Jokester}/>
                <Route path='/write-a-joke' exact component={JokeForm}/>
    */}
            </Router>
        );
    }
}

export default Jokester;