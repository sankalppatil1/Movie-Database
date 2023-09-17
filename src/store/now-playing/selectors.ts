
export function getNowPlayingMovies(state: any) {
  return state?.movies?.nowPlayingMovies?.nowPlayingMovies;
}

export function getNowPlayingFetchStatus(state: any) {
  return state.movies.nowPlayingMovies.fetchStatus;
}

export function getCurrentPageNowPlayingMovies(state: any) {
  return state.movies.nowPlayingMovies.nowPlayingSearchPage;
}

export function hasMorePagesWithNowPlayingMovies(state: any) {
  if (state.movies.nowPlayingMovies.nowPlayingMovies) {
    return (
      state.movies.nowPlayingMovies.nowPlayingSearchPage < state.movies.nowPlayingMovies.nowPlayingMovies.total_pages
    );
  }

  return false;
}
