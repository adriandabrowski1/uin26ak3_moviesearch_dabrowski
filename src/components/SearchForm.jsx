// Komponent som håndterer søkefeltet
function SearchForm({ searchTerm, setSearchTerm }) {
  return (
    <form>
      <label htmlFor="movie-search">Søk etter film</label>
      <input
        id="movie-search"
        type="search"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        placeholder="Skriv minst 3 tegn"
      />
    </form>
  )
}

export default SearchForm