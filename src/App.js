import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetails from "./components/MovieDetails/MovieDetails"
import Dashboard from "./pages/Dashboard/dashboard";
import "./App.css";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/:movieId" element={<MovieDetails/>} exact />
    </Routes>
  </BrowserRouter>
);
export default App;

// export default App;
