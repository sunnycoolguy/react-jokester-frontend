import React from 'react';
import JokeCard from './JokeCard.js';

class JokeListSingle extends React.Component {
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
            <div style={{fontSize : '23px', marginLeft: '16px'}}>{`${this.props.match.params.username}'s jokes:`}</div>
            {this.state.jokes.map((joke, index) => {
              if(index=== 0 && index === this.state.jokes.length - 1){
                return <JokeCard match={this.props.match} key={joke['_id']} isFirst={true} isLast={true} username={joke.username} setup={joke.setup} punchline={joke.punchline}/>
              }
              if(index === 0){
                return <JokeCard match={this.props.match} key={joke['_id']} isFirst={true} username={joke.username} setup={joke.setup} punchline={joke.punchline}/>
              }
              if(index === this.state.jokes.length - 1){
                return <JokeCard match={this.props.match} key={joke['_id']} isLast={true} username={joke.username} setup={joke.setup} punchline={joke.punchline}/>
              }
              return <JokeCard match={this.props.match} key={joke['_id']} username={joke.username} setup={joke.setup} punchline={joke.punchline}/>
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