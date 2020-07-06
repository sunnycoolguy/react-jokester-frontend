import React from 'react';
import {Link} from 'react-router-dom';

class JokeCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            vote : ''
        }
        this.handleHah = this.handleHah.bind(this);
        this.handleNah = this.handleNah.bind(this);
    }

    handleHah(){
        if(!this.alreadyLiked()){
            this.setState({
                vote : 'liked'
            });
            
        }
    }

    handleNah(){  
        if(!this.alreadyDisliked()){
            this.setState({
                vote : 'disliked'
            });
        }
    }

    alreadyLiked(){
        if(this.props.likedBy.includes(`${this.props.currentUser}`)){
            return true;
        }
        return false;
    }

    alreadyDisliked(){
        if(this.props.dislikedBy.includes(`${this.props.currentUser}`)){
            return true;
        }
        return false;
    }

    render(){
        return (
            <div className={`master-card ${this.props.isFirst ? 'first' : ''} ${this.props.isLast ? 'last' : ''}`}>
                <div className='joke-stats'>
                <div>1230</div>
                <div onClick={this.handleHah} className={`hah ${this.state.vote === 'liked' ? 'voted' : ''}`}>HAH!</div>
                <div onClick={this.handleNah} className={`nah ${this.state.vote === 'disliked'? 'voted' : ''}`}>nah.</div>
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