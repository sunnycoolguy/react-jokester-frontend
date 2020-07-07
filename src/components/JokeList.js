import React from 'react';
import JokeCard from './JokeCard.js';


class JokeList extends React.Component {
    
  constructor(props){
    super(props);
    this.state = {
      jokes : [],
      message : 'Loading...',
    }
  }
  
  render() {
      return (
        <div className='main'>
          <div style={{display : this.props.match.params.username ? 'block' : 'none'}}>{`${this.props.match.params.username}'s jokes:`}</div>
          {this.state.jokes.map((joke, index) => {
            if(index === 0){
              return <JokeCard match={this.props.match} likedBy={joke.likedBy} dislikedBy={joke.dislikedBy} key={joke['_id']} isFirst={true} username={joke.username} setup={joke.setup} punchline={joke.punchline}/>
            }
            if(index === this.state.jokes.length - 1){
              return <JokeCard match={this.props.match} likedBy={joke.likedBy} dislikedBy={joke.dislikedBy} key={joke['_id']} isLast={true} username={joke.username} setup={joke.setup} punchline={joke.punchline}/>
            }
            return <JokeCard match={this.props.match} likedBy={joke.likedBy} dislikedBy={joke.dislikedBy} key={joke['_id']} username={joke.username} setup={joke.setup} punchline={joke.punchline}/>
          })}
          <div style={{display:this.state.message ? 'block' : 'none'}}>{this.state.message}</div> 
        </div>
    );
  }

  componentDidMount(){
    fetch('http://localhost:4001/jokes')
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


export default JokeList;