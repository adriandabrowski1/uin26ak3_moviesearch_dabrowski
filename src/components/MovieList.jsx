import { Link } from "react-router"

// Komponent som viser en liste med filmer
function MovieList({ movies }) {
  return (
    <section>
      {movies.map((movie) => (
        <article key={movie.imdbID}>
          <header>
            <h2>
              <Link to={`/${encodeURIComponent(movie.Title)}`}>
                {movie.Title}
              </Link>
            </h2>
            <p>{movie.Year}</p>
          </header>

          {movie.Poster !== "N/A" ? (
            <img
              src={movie.Poster}
              alt={`Poster for ${movie.Title}`}
              width="150"
            />
          ) : (
            <p>Ingen plakat tilgjengelig</p>
          )}
        </article>
      ))}
    </section>
  )
}

export default MovieList