import { useNavigate } from "react-router-dom"

const GenreCard = ({ genre }) => {

  let navigate = useNavigate()

  return (
    <div className="card" onClick={() => navigate(`/view/games/${genre.id}`)}>
      <div className="img-wrapper">
        <img src={genre.image_background} alt={genre.name} />
      </div>
      <div className="info-wrapper flex-col">
        <h3>{genre.name}</h3>
        <p>{genre.gamesCount}</p>
      </div>
    </div>
  )
}

export default GenreCard
