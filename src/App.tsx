import React, { Suspense } from "react";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import DefaultLayout from "./components/molecules/DefaultLayout/DefaultLayout";
import HomePage from "./pages/HomePage/HomePage";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { ROUTE_CONSTANTS } from "./constants/AppConstants";
import TopRatedMoviesPage from "./pages/TopRatedMoviesPage/TopRatedMoviesPage";
import PopularMoviesPage from "./pages/PopularMoviesPage/PopularMoviesPage";
import NowPlayingMoviesPage from "./pages/NowPlayingMoviesPage/NowPlayingMoviesPage";
import UpcomingMoviesPage from "./pages/UpcomingMoviesPage/UpcomingMoviesPage";
import { ResetScroll } from "./components/molecules/ResetScroll/ResetScroll";
import SearchPage from "./pages/SearchPage/SearchPage";
import FavouritePage from "./pages/FavouritePage/FavouritePage";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Suspense fallback={<div>Loading...</div>}>
          <ResetScroll>
            <Routes>
              <Route element={<DefaultLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route
                  path={ROUTE_CONSTANTS.NOW_PLAYING}
                  element={<NowPlayingMoviesPage />}
                />
                <Route
                  path={ROUTE_CONSTANTS.POPULAR}
                  element={<PopularMoviesPage />}
                />
                <Route
                  path={ROUTE_CONSTANTS.TOP_RATED}
                  element={<TopRatedMoviesPage />}
                />
                <Route
                  path={ROUTE_CONSTANTS.UPCOMING}
                  element={<UpcomingMoviesPage />}
                />
                <Route
                  path={ROUTE_CONSTANTS.SEARCH}
                  element={<SearchPage />}
                />
                <Route
                  path={ROUTE_CONSTANTS.FAVOURITE}
                  element={<FavouritePage />}
                />
              </Route>
            </Routes>
          </ResetScroll>
        </Suspense>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
