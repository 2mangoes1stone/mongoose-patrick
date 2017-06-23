import React, { Component } from 'react';
import './App.css';
import MovieList from './components/movieList'



class App extends Component {
  state = {
    movies: null
  }
  render() {
    const { movies } = this.state
    return (
      <div className="App">
      !!movies? ? (
        <MovieList items={movies} />
      ) : (
        'Loading movies'
      )
      </div>
    );
  }


  // Run after our component first appears on screen
  componentDidMount() {
    // Load projects from API
    fetch('/movies')
    // Parsing the JSON into into Javascript objects
    .then(res => res.json())
    // Update our component's state with the loaded projects
    .then(json => {
      // Changing the state will re-render the component
      this.setState({
        movies: json
      })
    })
  }
}

export default App;
