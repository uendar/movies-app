import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "App";
import Dashboard from "./pages/Dashboard/dashboard";
import MovieDetails from "./components/MovieDetails/MovieDetails";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/:movieId" element={<MovieDetails />} />
    </Routes>
  </BrowserRouter>
);
export default App;
