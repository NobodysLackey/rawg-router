import { Routes, Route } from 'react-router-dom'
import GameDetails from './pages/GameDetails'
import ViewGames from './pages/ViewGames'
import Header from './components/Header'
import About from './pages/About'
import Home from './pages/Home'
import './App.css'

const App = () => {

  return (
    <div>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/games/details/:gameId" element={ <GameDetails /> } />
        <Route path="/view/games/:genreId" element={ <ViewGames /> } />
      </Routes>
    </main>
  </div>
  )
}

export default App
