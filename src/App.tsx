import React, { Suspense } from "react";
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
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";
import { Box, PaletteMode, Theme, ThemeOptions, ThemeProvider, createTheme } from "@mui/material";

export const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

function App() {

  const [mode, setMode] = React.useState<PaletteMode>('light');

  const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
          // palette values for light mode
          text: {
            primary: '#08a4a7',
            secondary: '#000',
          },
          primary: {
            main: '#FFF'
          },
          secondary: {
            main: '#08a4a7'
          }
        }
        : {
          // palette values for dark mode
          text: {
            primary: '#FFFF00',
            secondary: '#FFFFFF',
          },
          primary: {
            main: '#000'
          },
          secondary: {
            main: '#FFFF00'
          }
        }),
    },
  });

  const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === 'light' ? 'dark' : 'light',
        );
      },
    }),
    [],
  );

  const theme: Theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <ColorModeContext.Provider value={colorMode}>

      <ThemeProvider theme={theme}>
        <Box sx={{
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.text.secondary,
        }}>
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
                      <Route
                        path={`${ROUTE_CONSTANTS.MOVIE_DETAILS}/:id`}
                        element={<MovieDetailsPage />}
                      />
                    </Route>
                  </Routes>
                </ResetScroll>
              </Suspense>
            </Provider>
          </BrowserRouter>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>

  );
}

export default App;
