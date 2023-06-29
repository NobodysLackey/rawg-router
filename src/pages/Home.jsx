import GenreCard from '../components/GenreCard'
import GameCard from '../components/GameCard'
import Search from '../components/Search'
import { useState, useEffect } from 'react'
import { BASE_URL, API_KEY } from '../globals'
import axios from 'axios'

const Home = () => {
  const [genres, setGenres] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  const getGenres = async () => {
    let response = await axios.get(`${BASE_URL}/genres?key=${API_KEY}`)
    setGenres(response.data.results)
  }

  const getSearchResults = async (e) => {
    e.preventDefault()
    let response = await axios.get(`${BASE_URL}/games?key=${API_KEY}&search=${searchQuery}`)
    setSearchResults(response.data.results)
    setSearchQuery('')
  }

  useEffect(() => {
    getGenres()
  }, [])

  const handleChange = (e) => {
    setSearchQuery(e.target.value)
  }

  return (
    <div>
      <Search onSubmit={getSearchResults} onChange={handleChange} value={searchQuery} />
      {searchResults.length > 0 ? (
        <div className="search">
          <h2>Search Results</h2>
          <section className="search-results container-grid">
            {searchResults.map((result) => (
              <GameCard key={result.id} result={result} />
            ))}
          </section>
        </div>
      ) : (
        <div className="genres">
          <h2>Genres</h2>
          <section className="container-grid">
            {genres.map((genre) => (
              <GenreCard key={genre.id} genre={genre} />
            ))}
          </section>
        </div>
      )}
    </div>
  )
}

export default Home
