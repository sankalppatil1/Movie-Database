import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNowPlayingMoviesStart } from "../../store/now-playing/actions";
import { getNowPlayingMovies } from "../../store/now-playing/selectors";

function HomePage() {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(getNowPlayingMovies);

  useEffect(() => {
    dispatch(fetchNowPlayingMoviesStart());
  }, [dispatch]);

  console.log(nowPlayingMovies);

  return <div>HomePage</div>;
}

export default HomePage;
