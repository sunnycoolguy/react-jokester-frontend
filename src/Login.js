import React from 'react';


class Login extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            mode: 'login',
            username : '',
            password: '',
            memo : ''
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

    handleMemoChange(event){
        this.setState({
            memo : event.target.value
        })
    }

    handleLoginClick(event){
        this.setState({
            mode: 'login',
            username : '',
            password: '',
            memo : ''
        });
    }

    handleSignUpClick(event){
        this.setState({
            mode:'sign-up',
            username : '',
            password: '',
            memo : ''
        });
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.history.push('/jokes');
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
                </div> 
            </div>
        );
    }
}

export default Login;