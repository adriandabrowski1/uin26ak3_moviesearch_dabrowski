import { useEffect, useState } from "react"
import { getDefaultMovies, searchMovies } from "../services/omdb"
import MovieList from "../components/MovieList"
import SearchForm from "../components/SearchForm"

// Forsiden til applikasjonen
function HomePage() {
  // State som lagrer filmene som skal vises på siden
  const [movies, setMovies] = useState([])

  // State som lagrer teksten brukeren skriver i søkefeltet
  const [searchTerm, setSearchTerm] = useState("")

  // useEffect kjøres én gang når komponenten lastes.
  // Her hentes standardlisten med James Bond-filmer som skal vises før brukeren søker.
  useEffect(() => {
    async function loadDefaultMovies() {
      const data = await getDefaultMovies()
      setMovies(data)
    }

    loadDefaultMovies()
  }, [])

  // Denne useEffect-en kjører hver gang søketeksten endrer seg.
  // Hvis brukeren har skrevet minst 3 tegn, hentes søkeresultater fra API-et.
  // Hvis ikke, vises standardlisten igjen.
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

      {/* Viser hjelpetekst hvis brukeren har begynt å skrive,
          men ikke nok til å trigge et søk */}
      {searchTerm.trim().length > 0 && searchTerm.trim().length < 3 && (
        <p>Skriv minst 3 tegn for å søke.</p>
      )}

      <MovieList movies={movies} />
    </main>
  )
}

export default HomePage