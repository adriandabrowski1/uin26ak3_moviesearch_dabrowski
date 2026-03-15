import { Routes, Route } from "react-router"
import HomePage from "./pages/HomePage"
import MoviePage from "./pages/MoviePage"
import "./App.css"

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/:movie" element={<MoviePage />} />
    </Routes>
  )
}

export default App