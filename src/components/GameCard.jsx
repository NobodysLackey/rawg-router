import { useNavigate } from "react-router-dom"

const GameCard = ({ result }) => {

  let navigate = useNavigate()
  
  return (
    <div className="card game-card" onClick={() => navigate(`/games/details/${result.id}`)}>
      <div className="img-wrapper">
        <img src={result.background_image} alt={result.name} />
      </div>
      <div className="info-wrapper flex-col">
        <h3>{result.name}</h3>
        <p>{result.rating}</p>
      </div>
    </div>
  )
}

export default GameCard
