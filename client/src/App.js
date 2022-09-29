import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends React.Component
{
  state = 
  {
    data: null
  }

  componentDidMount()
  {
    axios.get('http://localhost:5000')
      .then((response) => 
      {
        this.setState(
          {
            data: response.data
          })
      })
      .catch((error) => 
      {
        console.error(`Error fetching data: ${error}`);
      })
  }

  render()
  {
    return(
      <div className="App">
        <header className="App-header">My Dream Journal Blog</header>
        {this.state.data}
        <img src={logo} className="App-logo" alt="logo" />
        <p className = "Paragraph">No update to come</p>
      </div>
    );
  }
}

export default App;
