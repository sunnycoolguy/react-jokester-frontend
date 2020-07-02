import React from 'react';
import NavBar from './NavBar.js';
import JokeList from './JokeList.js';
import JokeForm from './JokeForm.js';
import {Link, Switch, Route} from 'react-router-dom';

class Jokester extends React.Component {
    render(){
        return (
            <div>
                <NavBar match={this.props.match}/>
                <Switch>
                    <Route path={`${this.props.match.path}`} exact component={JokeList}/>
                    <Route path={`${this.props.match.path}/write-a-joke`} exact component={JokeForm}/>
                    <Route path={`${this.props.match.path}/:userid`} exact component={JokeList}/>
                </Switch>
            </div>
        );
    }
}

export default Jokester;