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
import Condition from './components/Condition/Condition'
import CreateProvider from './providers/CreateProvider'
import ModelChoose from './components/ModelChoose/ModelChoose'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Compartment from './components/Compartment/Compartment'
import Gears from './components/Gears/Gears'

function App() {
  const [isMenuShown, setIsMenuShown] = useState(false);

  return (
    <>
    <CreateProvider>
    <UserProvider>
    <BrowserRouter>
    <ScrollToTop />
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
          <Route path='/condition' element={<Condition />} />
          <Route path='/model' element={<ModelChoose />} />
          <Route path='/compartment' element={<Compartment />} />
          <Route path='/gears' element={<Gears />} />
          </Routes>
      </div>
      </BrowserRouter>
      </UserProvider>
      </CreateProvider>
    </>
  )
}

export default App
