// Komponent som viser en liste med filmer
function MovieList({ movies }) {
  return (
    <section>
      {movies.map((movie) => (
        <article key={movie.imdbID}>
          <h2>{movie.Title}</h2>
          <p>{movie.Year}</p>

          <img
            src={movie.Poster !== "N/A" ? movie.Poster : ""}
            alt={movie.Title}
            width="150"
          />
        </article>
      ))}
    </section>
  )
}

export default MovieList