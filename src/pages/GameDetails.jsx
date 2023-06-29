import { BASE_URL, API_KEY } from '../globals'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const GameDetails = () => {
  const [gameDetails, setGameDetails] = useState({})

  let { gameId } = useParams()

  const getGameDetails = async () => {
    let response = await axios.get(`${BASE_URL}/games/${gameId}?key=${API_KEY}`)
    setGameDetails(response.data)
  }

  useEffect(() => {
    getGameDetails()
  })

  return (
    <div className="game-content">
      <section className="image-container">
        <div>
          <img src={gameDetails.background_image_additional} alt={gameDetails.name} />
        </div>
      </section>
      <section className="details">
        <div className="flex-row space">
          <h2>{gameDetails.name}</h2>
        </div>
        <div>
          <p>
            {gameDetails.description_raw}
          </p>
        </div>
      </section>
    </div>
  )
}

export default GameDetails
