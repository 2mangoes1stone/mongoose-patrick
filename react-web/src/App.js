import React, { Component } from 'react';
import './App.css';
import MoviesList from './components/MoviesList'



class App extends Component {
  state = {
    error: null,
    movies: null
  }
  render() {
    const { error, movies } = this.state
    return (
      <div className="App">
      { !!error && <p>{ error.message }</p> }
        {
          !!movies ? (
            <MoviesList items={ movies } />
          ) : (
            'Loading movies…'
          )
        }
      </div>
    );
  }


  // Run after our component first appears on screen
  componentDidMount() {
    // Load movies from API
    fetch('movies')
      // Parsing the JSON into into Javascript objects
      .then(res => res.json())
      // Update our component's state with the loaded projects
      .then(movies => {
        // Changing the state will re-render the component
        this.setState({ movies })
      })
      .catch(error => {
        this.setState({ error })
      })
  }
}

export default App
