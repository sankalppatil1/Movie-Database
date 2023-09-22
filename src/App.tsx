import React, { Suspense } from "react";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout/DefaultLayout";
import HomePage from "./pages/HomePage/HomePage";
import { Provider } from "react-redux";
import { store } from "./store/store";
import NowPlayingPage from "./pages/NowPlayingPage/NowPlayingPage";
import { ROUTE_CONSTANTS } from "./constants/AppConstants";

function App() {
  return (
    <BrowserRouter>
    <Provider store={store}>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path={`/${ROUTE_CONSTANTS.NOW_PLAYING}`} element={<NowPlayingPage />} />
          </Route>
        </Routes>
      </Suspense>
    </Provider>
    </BrowserRouter>
  );
}

export default App;
