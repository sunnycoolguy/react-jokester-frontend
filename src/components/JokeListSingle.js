import React from 'react';
import JokeCard from './JokeCard.js';

class JokeListSingle extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            jokes : [],
            message : 'Loading...',
        }
        this.handleDelete = this.handleDelete.bind(this);
    }
    
    handleDelete(id){
        fetch(`http://localhost:4001/jokes/${this.props.currentUser}/${id}`, {
            method : 'DELETE',
        })
        .then((response) => {
            if(!response.ok){
                throw Error();
            }
            return response
        })
        .then(response => response.json())
        .then(data => {
            console.log('hello', data)
            this.setState({jokes : data})
        })
        .catch((error) => {
            console.log(error);
        });
    }

    render() {
        const isCurrentUserJoke= this.props.match.params.username === this.props.currentUser;
        return (
          <div className='main'>
            <div style={{fontSize : '23px', marginLeft: '16px'}}>{`${this.props.match.params.username}'s jokes:`}</div>
            {this.state.jokes.map((joke, index) => {
              if(index=== 0 && index === this.state.jokes.length - 1){
                return <JokeCard onDelete={()=> this.handleDelete(joke['_id'])} id={joke['_id']} isCurrentUserJoke={isCurrentUserJoke} match={this.props.match} likedBy={joke.likedBy} dislikedBy={joke.dislikedBy} key={joke['_id']} isFirst={true} isLast={true} username={joke.username} setup={joke.setup} punchline={joke.punchline}/>
              }
              if(index === 0){
                return <JokeCard onDelete={()=> this.handleDelete(joke['_id'])} id={joke['_id']} isCurrentUserJoke={isCurrentUserJoke} match={this.props.match} likedBy={joke.likedBy} dislikedBy={joke.dislikedBy}  key={joke['_id']} isFirst={true} username={joke.username} setup={joke.setup} punchline={joke.punchline}/>
              }
              if(index === this.state.jokes.length - 1){
                return <JokeCard onDelete={()=> this.handleDelete(joke['_id'])} id={joke['_id']} isCurrentUserJoke={isCurrentUserJoke} match={this.props.match} likedBy={joke.likedBy} dislikedBy={joke.dislikedBy}  key={joke['_id']} isLast={true} username={joke.username} setup={joke.setup} punchline={joke.punchline}/>
              }
              return <JokeCard onDelete={()=> this.handleDelete(joke['_id'])} id={joke['_id']} isCurrentUserJoke={isCurrentUserJoke} match={this.props.match} likedBy={joke.likedBy} dislikedBy={joke.dislikedBy} key={joke['_id']} username={joke.username} setup={joke.setup} punchline={joke.punchline}/>
            })}
            <div style={{display:this.state.message ? 'block' : 'none'}}>{this.state.message}</div> 
          </div>
      );
    }

    componentDidMount() {
        fetch(`http://localhost:4001/jokes/${this.props.match.params.username}`)
        .then((response) => response.json())
        .then((data) => {
          this.setState({
            jokes : data['jokes'],
            message : ''
          });
        })
        .catch((error) => {
          console.log(error);
          this.setState({
            message : 'Error loading jokes!'
          })
        });
    }
}

export default JokeListSingle;