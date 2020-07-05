import React from 'react';
import JokeCard from './JokeCard.js';


class JokeList extends React.Component {
    
  constructor(props){
    super(props);
    this.state = {
      jokes : [],
      message : 'Loading...'
    }
  }
  
  render() {
      return (
        <div className='main'>
          {this.state.jokes.map((joke) => {
            return <JokeCard username={joke.username} setup={joke.setup} punchline={joke.punchline}/>
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