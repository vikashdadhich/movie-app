import React, { Component } from 'react';
import Movie from './containers/MovieContainer';
import 'semantic-ui-css/semantic.min.css';

 class App extends Component {
  render() {
    return (
      <div className="App">
       <Movie/>
      </div>
    );
  }
}

export default App;
