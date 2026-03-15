import { useEffect, useState } from "react"
import { getDefaultMovies } from "../services/omdb"
import MovieList from "../components/MovieList"

// Forsiden til appen som viser en liste med 10 james bond filmer
function HomePage() {

  // state som lagrer filmer
  const [movies, setMovies] = useState([])

  // henter James Bond filmer når siden åpnes  
  useEffect(() => {
    async function loadMovies() {
      const data = await getDefaultMovies()
      setMovies(data)
    }

    loadMovies()
  }, [])

  return (
    <main>
      <header>
        <h1>Movie Search</h1>
        <p>Finn filmer med OMDb API</p>
      </header>

      <MovieList movies={movies} />

    </main>
  )
}

export default HomePage