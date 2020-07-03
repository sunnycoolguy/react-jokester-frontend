import React from 'react';


class JokeForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            setup : '',
            punchline : '',
            message : ''
        }
        this.handleSetupChange = this.handleSetupChange.bind(this);
        this.handlePunchlineChange = this.handlePunchlineChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSetupChange(event){
        this.setState({
            setup : event.target.value
        });
    }

    handlePunchlineChange(event){
        this.setState({
            punchline : event.target.value
        });
    }

    handleSubmit(event){
        event.preventDefault();
        fetch('http://localhost:4001/jokes', {
            method : 'POST',
            headers: {'Content-type' : 'application/json'},
            body: JSON.stringify({username : this.props.currentUser, setup : this.state.setup, punchline : this.state.punchline})
        })
        .then((response) => {
            if(!response.ok){
                console.log('what')
                throw Error();
            }
            return response
        })
        .then((data) => {
            this.setState({ message : 'Successfully posted your joke!'})
        })
        .catch((error) => {
            console.log(error);
            this.setState({message : 'There was a problem posting your joke ):'});
        });
    }

    render(){
        return (
            <div className='joke-form-box'>
                <p className='joke-form-header'>Write a joke <span role='img' aria-label='pen'>🖊️</span></p>
                <form className='joke-form' onSubmit={this.handleSubmit}>
                    <label htmlFor='setup'>Setup:</label>
                    <input type='text' id='setup' value={this.state.setup} onChange={this.handleSetupChange} required/>
                    <label htmlFor='punchline'>Punchline:</label>
                    <input type='text' id='punchline' value={this.state.punchline} onChange={this.handlePunchlineChange} required/>
                    <input id='post-joke' type='submit' value='&#43;'/>
                    <div style={{display : this.state.message ? 'block' : 'none'}}>{this.state.message}</div>
                </form>
            </div>
        );
    }
    
}

export default JokeForm;