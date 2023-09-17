import React, { Suspense } from "react";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout/DefaultLayout";
import HomePage from "./pages/HomePage/HomePage";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <BrowserRouter>
    <Provider store={store}>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
          </Route>
        </Routes>
      </Suspense>
    </Provider>
    </BrowserRouter>
  );
}

export default App;
