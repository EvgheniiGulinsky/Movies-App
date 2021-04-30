import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MovieList from './components/MovieList/MovieList';
import './index.css';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div className="app">
        <MovieList />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
