import React from 'react';

class App extends React.Component{
  render(){
    return (
      <div>
        <div className='nav'>
          <ul>
            <li className='title'><a>JOKERY</a></li>
            <li><a>All Jokes</a></li>
            <li><a>My Jokes</a></li>
            <li><a>Write a Joke</a></li>
            <li className='sign-out'><a>Sign out</a></li>
          </ul>
        </div>
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
    );
  }
}

export default App;