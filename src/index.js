/* eslint-disable react/destructuring-assignment */
/* eslint-disable object-shorthand */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import debounce from 'lodash.debounce';
import ApiClient from './components/ApiClient/ApiClient';
import { ApiClientProvider } from './components/ApiClientContext/ApiClientContext';
import MovieList from './components/MovieList/MovieList';
import InputField from './components/InputField/InputField';
import Header from './components/Header/Header';
import './index.css';

class App extends Component {
  ApiClient = new ApiClient();

  state = {
    movies: [],
    ratedMovies: [],
    numberOfPages: 1,
    numberOfRatedPages: 1,
    loading: true,
    error: false,
    message: '',
    searchInput: 'return',
    tab: '1',
    page: 1,
    genres: [],
  };

  moviesFetch = debounce(() => {
    this.setState({
      loading: true,
    });
    if (this.state.searchInput !== '') {
      this.ApiClient.getMovies(this.state.searchInput)
        .then((movies) => {
          if (movies.results.length !== 0) {
            this.setState({
              movies: movies.results,
              numberOfPages: movies.results.length,
              loading: false,
              error: false,
            });
          } else {
            this.setState({
              message: 'No results',
            });
            this.onErrorHandle();
          }
        })
        .catch(this.onErrorHandle);
    } else {
      this.onInputChange('return');
    }
  }, 700);

  onErrorHandle = () => {
    this.setState({
      error: true,
      loading: false,
    });
  };

  onCloseHandle = () => {
    if (this.state.movies.length !== 0) {
      this.setState({
        error: false,
        page: 1,
      });
    } else {
      this.setState({
        error: false,
        page: 1,
        searchInput: 'return',
      });
      this.moviesFetch();
    }
  };

  onInputChange = (input) => {
    this.setState({
      searchInput: input,
    });
    this.moviesFetch();
  };

  onTabChange = (newTab) => {
    this.setState({
      loading: true,
      tab: newTab,
      page: 1,
    });
    this.ratedMoviesFetch();
  };

  onPageSwitch = (page) => {
    this.ratedMoviesFetch();
    this.setState({ page });
  };

  onMovieRate = debounce((id, value) => {
    this.ApiClient.rateMovie(id, value);
  }, 500);

  ratedMoviesFetch = async () => {
    await this.ApiClient.getRatedMovies()
      .then((ratedMovies) => {
        if (ratedMovies.results.length !== 0) {
          this.setState({
            ratedMovies: ratedMovies.results,
            numberOfRatedPages: ratedMovies.results.length,
            loading: false,
          });
        }
      })
      .catch(this.onErrorHandle);
  };

  componentDidMount = () => {
    if (localStorage.getItem('sessionId') === null) {
      this.ApiClient.createGuestSession()
        .then((response) => {
          localStorage.setItem('sessionId', response.guest_session_id);
        })
        .then(() => this.ratedMoviesFetch())
        .then(() => this.moviesFetch());
    } else {
      this.ratedMoviesFetch();
      this.moviesFetch();
    }
    this.ApiClient.getGenres().then((result) => {
      this.setState({ genres: result.genres });
    });
  };

  render() {
    const {
      movies,
      ratedMovies,
      loading,
      error,
      numberOfPages,
      numberOfRatedPages,
      message,
      searchInput,
      tab,
      page,
      genres,
    } = this.state;
    return (
      <div className="app">
        <ApiClientProvider value={genres}>
          <Header onTabChange={this.onTabChange} tab={tab} />
          <InputField onInputChange={this.onInputChange} searchInput={searchInput} tab={tab} />
          <MovieList
            movies={movies}
            ratedMovies={ratedMovies}
            loading={loading}
            error={error}
            message={message}
            numberOfPages={numberOfPages}
            numberOfRatedPages={numberOfRatedPages}
            onCloseHandle={this.onCloseHandle}
            tab={tab}
            onMovieRate={this.onMovieRate}
            page={page}
            onPageSwitch={this.onPageSwitch}
          />
        </ApiClientProvider>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
