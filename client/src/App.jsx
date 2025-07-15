import { useState } from 'react'
import './App.css'
import Create from './components/Create/Create'
import Details from './components/Details/Details'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Navigation from './components/Navigation/Navigation'
import Register from './components/Register/Register'
import { BrowserRouter, Route, Routes } from 'react-router'
import UserProvider from './providers/UserProvider'

function App() {
  const [isMenuShown, setIsMenuShown] = useState(false);

  return (
    <>
    <UserProvider>
    <BrowserRouter>
      <div className="main">
      <Header showMenu={setIsMenuShown} />
      </div>

      {isMenuShown ? 
        <div className="aside-menu">
        <Navigation showMenu={setIsMenuShown} />
        </div>
      : ''}

      <div className="content">
          <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/details' element={<Details />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          </Routes>
      </div>
      </BrowserRouter>
      </UserProvider>
    </>
  )
}

export default App
