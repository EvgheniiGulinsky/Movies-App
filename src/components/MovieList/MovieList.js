/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import { Col, Row, Spin, Pagination } from 'antd';
import 'antd/dist/antd.css';
import PropTypes from 'prop-types';
import MovieListItem from '../MovieListItem/MovieListItem';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import './MovieList.css';

export default class MovieList extends Component {
  state = {
    pageSize: 6,
  };

  render() {
    const {
      movies,
      ratedMovies,
      loading,
      error,
      message,
      numberOfPages,
      numberOfRatedPages,
      onCloseHandle,
      tab,
      onMovieRate,
      page,
      onPageSwitch,
    } = this.props;
    const { pageSize } = this.state;

    const ratings = {};

    ratedMovies.forEach((movie) => {
      ratings[movie.id] = movie.rating;
    });

    const movieCards = movies.map((movie) => (
      <Col span={12} key={movie.id} className="card-column">
        <MovieListItem
          title={movie.title}
          id={movie.id}
          overview={movie.overview}
          releaseDate={movie.release_date}
          posterPath={movie.poster_path}
          genreIds={movie.genre_ids}
          voteAverage={movie.vote_average}
          rating={ratings[movie.id] ? ratings[movie.id] : 0}
          onMovieRate={onMovieRate}
        />
      </Col>
    ));

    const ratedMovieCards = ratedMovies.map((movie) => (
      <Col span={12} key={movie.id} className="card-column">
        <MovieListItem
          title={movie.title}
          id={movie.id}
          overview={movie.overview}
          releaseDate={movie.release_date}
          posterPath={movie.poster_path}
          genreIds={movie.genre_ids}
          voteAverage={movie.vote_average}
          rating={movie.rating}
          onMovieRate={onMovieRate}
        />
      </Col>
    ));

    const visibleMovies = movieCards.slice(page * pageSize - pageSize, page * pageSize);

    const visibleRatedMovies = ratedMovieCards.slice(page * pageSize - pageSize, page * pageSize);

    const films = !loading && !error && tab === '1' ? <Row gutter={[16, 16]}>{visibleMovies}</Row> : null;

    const errorMessage = error ? <ErrorMessage onCloseHandle={onCloseHandle} message={message} /> : null;

    const ratedFilms = !loading && !error && tab === '2' ? <Row gutter={[16, 16]}>{visibleRatedMovies}</Row> : null;

    return (
      <div className="movie-list">
        <Spin size="large" wrapperClassName="spin-loader" spinning={loading}>
          <div className="site-card-wrapper">
            {errorMessage}
            {films}
            {ratedFilms}
          </div>
        </Spin>
        {!loading && !error ? (
          <Pagination
            className="movie-pagination"
            defaultCurrent={1}
            total={tab === '1' ? numberOfPages : numberOfRatedPages}
            pageSize={pageSize}
            onChange={onPageSwitch}
          />
        ) : null}
      </div>
    );
  }
}

MovieList.propTypes = {
  message: PropTypes.string,
  numberOfPages: PropTypes.number,
  page: PropTypes.number,
  tab: PropTypes.string,
  numberOfRatedPages: PropTypes.number,
  onMovieRate: PropTypes.func,
  onCloseHandle: PropTypes.func,
  onPageSwitch: PropTypes.func,
  movies: PropTypes.arrayOf(PropTypes.object),
  ratedMovies: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
  error: PropTypes.bool,
};

MovieList.defaultProps = {
  message: '',
  numberOfPages: 1,
  page: 1,
  tab: '1',
  numberOfRatedPages: [],
  onMovieRate: () => {},
  onCloseHandle: () => {},
  onPageSwitch: () => {},
  movies: [],
  ratedMovies: [],
  loading: true,
  error: false,
};
