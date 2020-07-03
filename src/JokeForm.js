import React from 'react';


const JokeForm = () => {
    return (
        <div className='joke-form-box'>
            <p className='joke-form-header'>Write a joke <span role='img' aria-label='pen'>🖊️</span></p>
            <form className='joke-form'>
            <label htmlFor='setup'>Setup:</label>
            <input type='text' id='setup' required/>
            <label htmlFor='punchline'>Punchline:</label>
            <input type='text' id='punchline' required/>
            <input id='post-joke' type='submit' value=	'&#43;'/>
            </form>
        </div>
    );
}

export default JokeForm;