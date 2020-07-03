import React from 'react';
import {Link} from 'react-router-dom';


const NavBar = (props) => {
    return (
        <div className='nav'>
            <Link id='title' to={`${props.match.url}`}>
                JOKESTER
            </Link>
            <Link to={'/'} onClick={props.onSignOut}>
                Sign Out
            </Link>
            <Link to={`${props.match.url}/write-a-joke`}>
                Write a Joke
            </Link>
            <Link to={`${props.match.url}`}>
                All Jokes
            </Link>
        </div> 
    );
}

export default NavBar;