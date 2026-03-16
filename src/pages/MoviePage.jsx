import { useEffect, useState } from "react"
import { Link, useParams } from "react-router"

function MoviePage() {
  // Henter filmtittelen fra URL-parameteren
  const { movie } = useParams()

  // State som lagrer dataen til filmen
  const [movieData, setMovieData] = useState(null)

  // Henter filminformasjon fra OMDb når siden lastes
  // eller når URL-parameteren endrer seg
  useEffect(() => {
    async function fetchMovie() {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_API_KEY}&t=${encodeURIComponent(movie)}`
      )

      const data = await response.json()
      setMovieData(data)
    }

    fetchMovie()
  }, [movie])

  // Viser melding mens data lastes
  if (!movieData) {
    return <p>Laster film...</p>
  }

  return (
    <main>
      <header>
        <h1>{movieData.Title}</h1>
        <p>{movieData.Year}</p>

        {/* Navigasjon tilbake til forsiden */}
        <nav aria-label="Tilbakenavigasjon">
          <Link to="/">Tilbake til forsiden</Link>
        </nav>
      </header>

      {/* Viser filmplakat dersom den finnes */}
      {movieData.Poster !== "N/A" ? (
        <img
          src={movieData.Poster}
          alt={`Poster for ${movieData.Title}`}
          width="200"
        />
      ) : (
        <p>Ingen plakat tilgjengelig</p>
      )}

      {/* Seksjon som viser handlingen til filmen */}
      <section>
        <h2>Handling</h2>
        <p>{movieData.Plot}</p>
      </section>
    </main>
  )
}

export default MoviePage