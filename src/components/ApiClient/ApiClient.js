import { Component } from 'react';

export default class ApiClient extends Component {
  _ApiBase = 'https://api.themoviedb.org/3/search/movie?api_key=384b86bc035ceb5247a1a9fc94fec8e0&language=en-US';

  _PosterUrlBase = 'https://image.tmdb.org/t/p/original';

  async getMovies(url) {
    // eslint-disable-next-line no-underscore-dangle
    const result = await fetch(`${this._ApiBase}&query=${url}`);
    if (!result.ok) {
      throw new Error(`Couldn't fetch ${url}, received status ${result.status}`);
    }
    // eslint-disable-next-line no-return-await
    return await result.json();
  }
}
