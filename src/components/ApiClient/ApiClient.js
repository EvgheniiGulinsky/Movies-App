/* eslint-disable no-return-await */
/* eslint-disable no-underscore-dangle */
export default class ApiClient {
  _ApiKey = '384b86bc035ceb5247a1a9fc94fec8e0';

  _ApiBase = `https://api.themoviedb.org/3/search/movie?api_key=${this._ApiKey}&language=en-US`;

  _PosterUrlBase = 'https://image.tmdb.org/t/p/original';

  async createGuestSession() {
    const result = await fetch(`https://api.themoviedb.org/3/authentication/guest_session/new?api_key=${this._ApiKey}`);
    if (!result.ok) {
      throw new Error(`Couldn't create a guest session ${result.status}`);
    }
    return await result.json();
  }

  async getRatedMovies() {
    const sessionId = localStorage.getItem('sessionId');
    const result = await fetch(
      `https://api.themoviedb.org/3/guest_session/${sessionId}/rated/movies?api_key=${this._ApiKey}&language=en-US&sort_by=created_at.asc`
    );
    if (!result.ok) {
      throw new Error(`Couldn't fetch rated movies ${result.status}`);
    }
    return await result.json();
  }

  async getMovies(url) {
    const result = await fetch(`${this._ApiBase}&query=${url}`);
    if (!result.ok) {
      throw new Error(`Couldn't fetch ${url}, received status ${result.status}`);
    }
    return await result.json();
  }

  async rateMovie(movieId, rating) {
    const sessionId = localStorage.getItem('sessionId');
    const json = JSON.stringify({ value: rating });
    const result = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/rating?api_key=${this._ApiKey}&guest_session_id=${sessionId}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: json,
      }
    );
    return await result.json();
  }

  async getGenres() {
    const result = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${this._ApiKey}&language=en-US`);
    if (!result.ok) {
      throw new Error(`Couldn't fetch genres, received status ${result.status}`);
    }
    return await result.json();
  }
}
