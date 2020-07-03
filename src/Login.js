import React from 'react';

class Login extends React.Component{

    constructor(props, context){
        super(props);
        this.state = {
            mode: 'login',
            username : '',
            password: '',
            signUpError: ''
        };
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleSignUpClick = this.handleSignUpClick.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUsernameChange(event){
        this.setState({
            username : event.target.value
        })
    }
    
    handlePasswordChange(event){
        this.setState({
            password : event.target.value
        })
    }

    handleLoginClick(event){
        this.setState({
            mode: 'login',
            username : '',
            password: '',
        });
    }

    handleSignUpClick(event){
        this.setState({
            mode:'sign-up',
            username : '',
            password: '',
        });
    }

    handleSubmit(event){
        event.preventDefault();
            
        if(this.state.mode === 'login'){
        } else {
            fetch('http://localhost:4001/users', {
                method : 'POST',
                headers: {'Content-type' : 'application/json'},
                body: JSON.stringify({username : this.state.username, password : this.state.password})
            })
            .then((response) => {
                if(!response.ok){
                    throw Error();
                }
                return response
            })
            .then(response => response.json())
            .then((data) => {
                console.log(data.currentUser);
                this.props.onLogin(data.currentUser);
                this.props.history.push('/jokes');
            },
            (error) => {
                this.setState({signUpError: 'That username already exists'})
            });
        }
    }

    

    render(){
        return (
            <div className='container'>
                <div className='login'>
                    <div className='toggle-bar'>
                        <span onClick={this.handleLoginClick} className='login-button' style={{ opacity: this.state.mode ==='login'? 1 : 0.5 }}>Log In</span>
                        <span> | </span>
                        <span onClick={this.handleSignUpClick}className='sign-up-button' style={{ opacity: this.state.mode ==='sign-up'? 1 : 0.5 }}>Sign Up</span>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor='username'/>Username:<label/>
                        <input required type='text' id='username' name='username' value={this.state.username} onChange={this.handleUsernameChange}/>
                        <label htmlFor='password' id='plabel'>Password:</label> 
                        <input required type='password' id='password' name='password' value={this.state.password} onChange={this.handlePasswordChange}/>
                        <input type='submit' value={this.state.mode === 'login' ? 'Log In' : 'Sign Up'}/>
                    </form>
                    <div style={{display: this.state.signUpError ? 'block' : 'none'}}>That username already exists!</div>
                </div> 
            </div>
        );
    }
}

export default Login;