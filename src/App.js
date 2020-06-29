import React from 'react';

class App extends React.Component{
  render(){
    return (
      <div>
        <div className='nav'>
          <a id='title'>JOKERY</a>
          <a>Sign Out</a>
          <a>Write a Joke</a>
          <a>My Jokes</a>
          <a>All Jokes</a>
        </div>
        <div className='main'>
          <div className='master-card first'>
            <div className='joke-stats'>
              <div>1230</div>
              <div id='hah'>HAH!</div>
              <div id='nah'>nah.</div>
              <div>43</div>
            </div>
            <div className='joke'>
              <p>Setup : ________</p>
              <p>Punchline: _______</p>
            </div>
          </div>
          <div className='master-card'>
            <div className='joke-stats'>
              <div>1230</div>
              <div id='hah'>HAH!</div>
              <div id='nah'>nah.</div>
              <div>43</div>
            </div>
            <div className='joke'>
              <p>Setup : ________</p>
              <p>Punchline: _______</p>
            </div>
          </div>
          <div className='master-card'>
            <div className='joke-stats'>
              <div>1230</div>
              <div id='hah'>HAH!</div>
              <div id='nah'>nah.</div>
              <div>43</div>
            </div>
            <div className='joke'>
              <p>Setup : ________</p>
              <p>Punchline: _______</p>
            </div>
          </div>
          <div className='master-card'>
            <div className='joke-stats'>
              <div>1230</div>
              <div id='hah'>HAH!</div>
              <div id='nah'>nah.</div>
              <div>43</div>
            </div>
            <div className='joke'>
              <p>Setup : ________</p>
              <p>Punchline: _______</p>
            </div>
          </div>
          <div className='master-card'>
            <div className='joke-stats'>
              <div>1230</div>
              <div id='hah'>HAH!</div>
              <div id='nah'>nah.</div>
              <div>43</div>
            </div>
            <div className='joke'>
              <p>Setup : ________</p>
              <p>Punchline: _______</p>
            </div>
          </div>
          <div className='master-card last'>
            <div className='joke-stats'>
              <div>1230</div>
              <div id='hah'>HAH!</div>
              <div id='nah'>nah.</div>
              <div>43</div>
            </div>
            <div className='joke'>
              <p>Setup : ________</p>
              <p>Punchline: _______</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;