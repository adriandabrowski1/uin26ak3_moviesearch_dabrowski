// API-nøkkel hentes fra .env-filen via Vite
const API_KEY = import.meta.env.VITE_OMDB_API_KEY

// Base URL for OMDb API
const BASE_URL = "https://www.omdbapi.com/"


// Henter standardfilmer til forsiden.
// Her brukes ekte James Bond-filmer slik at siden viser minst 10 filmer før brukeren søker.
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

  // Lager et API-kall for hver filmtittel
  const moviePromises = bondTitles.map(async (title) => {

    const response = await fetch(
      `${BASE_URL}?apikey=${API_KEY}&t=${encodeURIComponent(title)}&type=movie`
    )

    const data = await response.json()

    // Hvis API-et ikke finner filmen returneres null
    if (data.Response === "False") {
      return null
    }

    return data
  })

  // Promise.all gjør at alle API-kallene kjøres parallelt
  const movies = await Promise.all(moviePromises)

  // Fjerner eventuelle null-verdier fra listen
  return movies.filter(Boolean)
}


// Søker etter filmer basert på tittel.
// Brukes når brukeren skriver minst 3 tegn i søkefeltet.
export async function searchMovies(searchTerm) {

  const response = await fetch(
    `${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(searchTerm)}&type=movie`
  )

  const data = await response.json()

  // Hvis ingen filmer blir funnet returneres en tom liste
  if (data.Response === "False") {
    return []
  }

  return data.Search || []
}