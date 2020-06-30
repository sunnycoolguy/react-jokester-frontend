import React from 'react';


const JokeForm = () => {
    return (
        <div className='joke-form-container'>
          <div className='joke-form-box'>
            <span className='close'>&times;</span>
            <p className='joke-form-header'>Write a joke: </p>
            <form>
              <label htmlFor='setup'>Setup:</label>
              <input type='text' id='setup' required/>
              <label htmlFor='setup'>Punchline:</label>
              <input type='text' id='setup' required/>
              <input type='submit' value='Post Joke'/>
            </form>
          </div>
        </div>
    );
}

export default JokeForm;