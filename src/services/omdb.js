const API_KEY = import.meta.env.VITE_OMDB_API_KEY
const BASE_URL = "https://www.omdbapi.com/"

export async function getDefaultMovies() {
  const response = await fetch(
    `${BASE_URL}?apikey=${API_KEY}&s=james%20bond&type=movie`
  )

  const data = await response.json()

  if (data.Response === "False") {
    return []
  }

  return data.Search || []
}