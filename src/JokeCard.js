import React from 'react';
import {Link} from 'react-router-dom';

class JokeCard extends React.Component {
    render(){
        return (
            <div className={`master-card ${this.props.isFirst ? 'first' : ''} ${this.props.isLast ? 'last' : ''}`}>
                <div className='joke-stats'>
                <div>1230</div>
                <div id='hah'>HAH!</div>
                <div id='nah'>nah.</div>
                <div>43</div>
                </div>
                <div className='joke'>
                    <div style={{marginTop : '10px'}}>
                        <span>Posted by: </span> <Link to={`/jokes/${this.props.username}`}>{`${this.props.username}`}</Link>
                    </div>
                    <p>{`Setup : ${this.props.setup}` }</p>
                    <p>{`Punchline: ${this.props.punchline}` }</p>
                </div>
            </div>
        );
    }
}

export default JokeCard;