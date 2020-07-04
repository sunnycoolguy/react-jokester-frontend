import React from 'react';

class JokeCard extends React.Component {
    render(){
        return (
            <div className='master-card'>
                <div className='joke-stats'>
                <div>1230</div>
                <div id='hah'>HAH!</div>
                <div id='nah'>nah.</div>
                <div>43</div>
                </div>
                <div className='joke'>
                    <p>{`Posted by: ${this.props.username}` }</p>
                    <p>{`Setup : ${this.props.setup}` }</p>
                    <p>{`Punchline: ${this.props.punchline}` }</p>
                </div>
            </div>
        );
    }
}

export default JokeCard;