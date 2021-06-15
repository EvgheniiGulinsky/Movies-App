/* eslint-disable no-nested-ternary */
/* eslint-disable prefer-template */
/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import { Card, Rate } from 'antd';
import { getDate, format, getYear } from 'date-fns';
import PropTypes from 'prop-types';
import ApiClient from '../ApiClient/ApiClient';
import textTrim from '../textTrim/textTrim';
import { ApiClientConsumer } from '../ApiClientContext/ApiClientContext';

import './MovieListItem.css';

export default class MovieListItem extends Component {
  ApiClient = new ApiClient();

  state = {
    updatedRating: null,
  };

  onRatingUpdate(value) {
    this.setState({ updatedRating: value });
  }

  render() {
    const { title, id, overview, releaseDate, posterPath, genreIds, voteAverage, rating, onMovieRate } = this.props;
    const { updatedRating } = this.state;
    const _posterUrl = 'https://image.tmdb.org/t/p/original';
    return (
      <ApiClientConsumer>
        {(genres) => {
          const movieGenres = [];
          genreIds.forEach((el) => {
            genres.forEach((genre) => {
              if (el === genre.id) {
                movieGenres.push(genre.name);
              }
            });
          });
          return (
            <Card style={{ width: 454, height: 281 }} key={id} hoverable bodyStyle={{ padding: '0' }}>
              <div className="movie-card__content">
                {posterPath === null ? (
                  <img className="movie-card__poster" alt="no poster" src="../../assets/no_poster.jpg" />
                ) : (
                  <img className="movie-card__poster" alt="movie poster" src={_posterUrl + posterPath} />
                )}
                <div className="movie-card__description">
                  <p className="title">{title}</p>
                  <div
                    className={
                      voteAverage < 3
                        ? 'user-rating low'
                        : voteAverage < 5
                        ? 'user-rating average'
                        : voteAverage < 7
                        ? 'user-rating good'
                        : 'user-rating excellent'
                    }
                  >
                    {voteAverage}
                  </div>
                  <p className="date">
                    {releaseDate instanceof Date
                      ? `${format(new Date(releaseDate), 'MMMM')} ${getDate(new Date(releaseDate))}, ${getYear(
                          new Date(releaseDate)
                        )}`
                      : null}
                  </p>
                  <div className="genres">
                    {movieGenres.map((el) => (
                      <div className="genre" key={el}>
                        {el}
                      </div>
                    ))}
                  </div>
                  <p className="description">{textTrim(overview, 200)}</p>
                  <Rate
                    className="movie-rating"
                    count={10}
                    value={updatedRating || rating}
                    onChange={(value) => {
                      if (updatedRating !== value && rating !== value) {
                        this.onRatingUpdate(value);
                        onMovieRate(id, value);
                      }
                    }}
                  />
                </div>
              </div>
            </Card>
          );
        }}
      </ApiClientConsumer>
    );
  }
}

MovieListItem.propTypes = {
  title: PropTypes.string,
  id: PropTypes.number,
  overview: PropTypes.string,
  releaseDate: PropTypes.string,
  posterPath: PropTypes.string,
  voteAverage: PropTypes.number,
  rating: PropTypes.number,
  onMovieRate: PropTypes.func,
  genreIds: PropTypes.arrayOf(PropTypes.number),
};

MovieListItem.defaultProps = {
  title: '',
  id: 0,
  overview: '',
  releaseDate: '',
  posterPath: '',
  voteAverage: 0,
  rating: 0,
  onMovieRate: () => {},
  genreIds: [],
};
