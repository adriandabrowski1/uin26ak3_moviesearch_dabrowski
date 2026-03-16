import { useEffect, useState } from "react"
import { getDefaultMovies, searchMovies } from "../services/omdb"
import MovieList from "../components/MovieList"
import SearchForm from "../components/SearchForm"

// Forsiden til applikasjonen
function HomePage() {
  // State som lagrer filmene som skal vises
  const [movies, setMovies] = useState([])

  // State som lagrer det brukeren skriver i søkefeltet
  const [searchTerm, setSearchTerm] = useState("")

  // Henter standardfilmer når siden lastes første gang
  useEffect(() => {
    async function loadDefaultMovies() {
      const data = await getDefaultMovies()
      setMovies(data)
    }

    loadDefaultMovies()
  }, [])

  // Kjører søk når brukeren skriver minst 3 tegn
  useEffect(() => {
    async function loadMovies() {
      if (searchTerm.trim().length >= 3) {
        const results = await searchMovies(searchTerm)
        setMovies(results)
      } else {
        const defaultMovies = await getDefaultMovies()
        setMovies(defaultMovies)
      }
    }

    loadMovies()
  }, [searchTerm])

  return (
    <main>
      <header>
        <h1>Movie Search</h1>
        <p>Finn filmer med OMDb API</p>
      </header>

      <SearchForm
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      {searchTerm.trim().length > 0 && searchTerm.trim().length < 3 && (
        <p>Skriv minst 3 tegn for å søke.</p>
      )}

      <MovieList movies={movies} />
    </main>
  )
}

export default HomePage