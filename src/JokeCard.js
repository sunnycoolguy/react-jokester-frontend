import React from 'react';
import {Link} from 'react-router-dom';

class JokeCard extends React.Component {

    render(){
        return (
            <div className={`master-card ${this.props.isFirst ? 'first' : ''} ${this.props.isLast ? 'last' : ''}`}>
                <div className='joke'>
                    <div className='poster'>
                        <span>Posted by: </span> <Link to={`/jokes/${this.props.username}`}>{`${this.props.username}`}</Link>
                    </div>
                    <p className='setup'>{`Setup : ${this.props.setup}` }</p>
                    <p className='punchline'>{`Punchline: ${this.props.punchline}` }</p>
                    <div className='joke-actions'>
                        {this.props.isCurrentUserJoke ? <Link className='edit-button' to={`/jokes/edit-a-joke/${this.props.id}`}>Edit</Link> : null}
                        {this.props.isCurrentUserJoke ? <Link className='delete-button' onClick={this.props.onDelete} to={`/jokes/${this.props.username}`}>Delete</Link> : null}
                    </div>
                </div>
            </div>
        );
    }
}

export default JokeCard;