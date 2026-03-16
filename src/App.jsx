import { Routes, Route } from "react-router"
import HomePage from "./pages/HomePage"
import MoviePage from "./pages/MoviePage"
import "./App.css"

function App() {
  return (
    // Routes inneholder alle routene i applikasjonen
    <Routes>

      {/* Forsiden til applikasjonen */}
      <Route path="/" element={<HomePage />} />

      {/* Dynamisk route for en valgt film.
          URL-parameteren brukes i MoviePage til å hente riktig film */}
      <Route path="/:movie" element={<MoviePage />} />

    </Routes>
  )
}

export default App