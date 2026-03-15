import { useParams } from "react-router"

function MoviePage() {
  const { movie } = useParams()

  return (
    <main>
      <header>
        <h1>{movie}</h1>
      </header>
    </main>
  )
}

export default MoviePage