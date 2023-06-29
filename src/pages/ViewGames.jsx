import GameCard from '../components/GameCard'
import { BASE_URL, API_KEY } from '../globals'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const ViewGames = () => {
  const [games, setGames] = useState([])

  let { genreId } = useParams()

  const getGamesByGenre = async () => {
    let response = await axios.get(`${BASE_URL}/games?page_size=40&genres=${genreId}&key=${API_KEY}`)
    setGames(response.data.results)
  }

  useEffect(() => {
    getGamesByGenre()
  })

  return (
    <div className="container-grid">
      {games.map((game) => (
        <GameCard key={game.id} result={game} />
      ))}
    </div>
  )
}

export default ViewGames
