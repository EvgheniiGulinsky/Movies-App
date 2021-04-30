/* eslint-disable react/no-unused-state */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { Col, Row } from 'antd';
import 'antd/dist/antd.css';
import MovieListItem from '../MovieListItem/MovieListItem';
import ApiClient from '../ApiClient/ApiClient';
import './MovieList.css';

// eslint-disable-next-line react/prefer-stateless-function
export default class MovieList extends Component {
  ApiClient = new ApiClient();

  state = {
    movies: [],
  };

  render() {
    this.ApiClient.getMovies('return').then((movies) => {
      this.setState({
        movies: movies.results,
      });
    });

    const movies = this.state.movies.map((movie) => (
      <Col span={12} key={movie.id} className="card-column">
        <MovieListItem
          title={movie.title}
          id={movie.id}
          overview={movie.overview}
          releaseDate={movie.release_date}
          posterPath={movie.poster_path}
        />
      </Col>
    ));

    return (
      <div className="site-card-wrapper movie-list">
        <Row gutter={[16, 16]}>{movies}</Row>
      </div>
    );
  }
}
