import React from 'react';
import {Link} from 'react-router-dom';


const NavBar = (props) => {
    return (
        <div className='nav'>
            <Link to={`${props.match.url}`}>
                    JOKESTER
            </Link>
            <Link to={'/'}>
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