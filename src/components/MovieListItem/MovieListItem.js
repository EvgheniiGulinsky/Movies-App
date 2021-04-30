/* eslint-disable import/no-self-import */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import { Skeleton, Card } from 'antd';
import { getDate, format, getYear } from 'date-fns';
import textTrim from '../textTrim';

import './MovieListItem.css';

export default class MovieListItem extends Component {
  render() {
    const { title, id, overview, releaseDate, posterPath } = this.props;
    const _posterUrl = 'https://image.tmdb.org/t/p/original';
    return (
      <Card style={{ width: 454, height: 281 }} key={id} hoverable bodyStyle={{ padding: '0' }}>
        <Skeleton loading={false} avatar active>
          <div className="movie-card__content">
            <img className="movie-card__poster" alt="poster" src={_posterUrl + posterPath} />
            <div className="movie-card__description">
              <p className="title">{title}</p>
              <p className="date">
                {`${format(new Date(releaseDate), 'MMMM')} ${getDate(new Date(releaseDate))}, ${getYear(
                  new Date(releaseDate)
                )}`}
              </p>
              <div className="genres">
                <div className="genre">Action</div>
                <div className="genre">Drama</div>
              </div>
              <p className="description">{textTrim(overview, 200)}</p>
            </div>
          </div>
        </Skeleton>
      </Card>
    );
  }
}
