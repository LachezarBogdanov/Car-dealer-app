import { useState } from 'react'
import './App.css'
import Create from './components/Create/Create'
import Details from './components/Details/Details'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Navigation from './components/Navigation/Navigation'
import Register from './components/Register/Register'

function App() {
  const [isMenuShown, setIsMenuShown] = useState(false);

  return (
    <>
    <div className="main">
     <Header showMenu={setIsMenuShown} />
    </div>

    {isMenuShown ? 
      <div className="aside-menu">
      <Navigation showMenu={setIsMenuShown} />
      </div>
     : ''}

    <div className="content">
      <Login />
    </div>
    </>
  )
}

export default App
