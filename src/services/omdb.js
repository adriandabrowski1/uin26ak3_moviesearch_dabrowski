const API_KEY = import.meta.env.VITE_OMDB_API_KEY
const BASE_URL = "https://www.omdbapi.com/"

// Henter standardfilmer til forsiden (ekte James Bond-filmer)
export async function getDefaultMovies() {

  const bondTitles = [
    "Dr. No",
    "From Russia with Love",
    "Goldfinger",
    "Thunderball",
    "You Only Live Twice",
    "On Her Majesty's Secret Service",
    "Diamonds Are Forever",
    "Live and Let Die",
    "The Man with the Golden Gun",
    "The Spy Who Loved Me"
  ]

  const moviePromises = bondTitles.map(async (title) => {

    const response = await fetch(
      `${BASE_URL}?apikey=${API_KEY}&t=${encodeURIComponent(title)}&type=movie`
    )

    const data = await response.json()

    if (data.Response === "False") {
      return null
    }

    return data
  })

  const movies = await Promise.all(moviePromises)

  return movies.filter(Boolean)
}


// Søker etter filmer basert på tittel
export async function searchMovies(searchTerm) {

  const response = await fetch(
    `${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(searchTerm)}&type=movie`
  )

  const data = await response.json()

  if (data.Response === "False") {
    return []
  }

  return data.Search || []
}