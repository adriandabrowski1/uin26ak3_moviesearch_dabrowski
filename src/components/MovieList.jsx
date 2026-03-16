import MovieCard from "./MovieCard"

// Komponent som viser en liste med filmer
function MovieList({ movies }) {
  return (
    <section>
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </section>
  )
}

export default MovieList