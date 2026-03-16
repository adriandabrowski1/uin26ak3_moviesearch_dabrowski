import MovieCard from "./MovieCard"

// Komponent som viser en liste med filmer
function MovieList({ movies }) {
  return (
    <section aria-label="Filmliste">
      <ul>
        {movies.map((movie) => (
          <li key={movie.imdbID}>
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default MovieList