import React from 'react';


class EditJoke extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            setup : '',
            oldPunchline: '',
            newPunchline : '',
            oldSetup: '',
            newSetup : '',
            message : ''
        }
        this.handleSetupChange = this.handleSetupChange.bind(this);
        this.handlePunchlineChange = this.handlePunchlineChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSetupChange(event){
        this.setState({
            newSetup : event.target.value
        });
    }

    handlePunchlineChange(event){
        this.setState({
            newPunchline : event.target.value
        });
    }

    handleSubmit(event){
        event.preventDefault();
        fetch(`http://localhost:4001/jokes/${this.props.currentUser}/${this.props.match.params.id}`, {
            method : 'PUT',
            headers: {'Content-type' : 'application/json'},
            body: JSON.stringify({setup : this.state.newSetup, punchline : this.state.newPunchline})
        })
        .then((response) => {
            if(!response.ok){
                throw Error();
            }
            return response
        })
        .then((data) => {
            this.setState({
                message : 'Successfully updated your joke!',
                setup : '',
                punchline: ''
            });
        })
        .catch((error) => {
            console.log(error);
            this.setState({message : 'There was a problem editing your joke ):'});
        });
    }

    render(){
        return (
            <div className='joke-form-box'>
                <p className='joke-form-header'>Write a joke <span role='img' aria-label='pen'>🖊️</span></p>
                <form className='joke-form' onSubmit={this.handleSubmit}>
                    <p>{`Old Setup: ${this.state.oldSetup}`}</p>
                    <label htmlFor='setup'>New Setup:</label>
                    <input type='text' id='setup' value={this.state.newSetup} onChange={this.handleSetupChange} required/>
                    <p>{`Old Punchline: ${this.state.oldPunchline}`}</p>
                    <label htmlFor='punchline'>New Punchline:</label>
                    <input type='text' id='punchline' value={this.state.newPunchline} onChange={this.handlePunchlineChange} required/>
                    <input id='post-joke' type='submit' value='&#43;'/>
                    <div style={{display : this.state.message ? 'block' : 'none'}}>{this.state.message}</div>
                </form>
            </div>
        );
    }
    

    componentDidMount(){
        fetch(`http://localhost:4001/jokes/${this.props.currentUser}/${this.props.match.params.id}`)
        .then(res => res.json())
        .then(data => this.setState({oldSetup : data.joke.setup, oldPunchline : data.joke.punchline}))
        .catch(err => console.log(err));
    }
    
}

export default EditJoke;