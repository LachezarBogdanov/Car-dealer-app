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
import Compartment from './components/Compartment/Compartment'
import Gears from './components/Gears/Gears'
import Fuel from './components/Fuel/Fuel'
import Year from './components/Year/Year'
import Doors from './components/Doors/Doors'
import Color from './components/Color/Color'
import MyCars from './components/MyCars/MyCars'
import Favourites from './components/Favourites/Favourites'
import FavouriteProvider from './providers/FavouriteProvider'

function App() {
  const [isMenuShown, setIsMenuShown] = useState(false);

  return (
    <>
    <FavouriteProvider>
    <CreateProvider>
    <UserProvider>
    <BrowserRouter>
    {/* <ScrollToTop /> */}
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
          <Route path='/details/:carId' element={<Details />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/condition' element={<Condition />} />
          <Route path='/model' element={<ModelChoose />} />
          <Route path='/compartment' element={<Compartment />} />
          <Route path='/gears' element={<Gears />} />
          <Route path='/fuel' element={<Fuel />} />
          <Route path='/year' element={<Year />} />
          <Route path='/doors' element={<Doors />} />
          <Route path='/color' element={<Color />} />
          <Route path='/myCars' element={<MyCars />} />
          <Route path='/favourites' element={<Favourites />} />
          </Routes>
      </div>
      </BrowserRouter>
      </UserProvider>
      </CreateProvider>
    </FavouriteProvider>
    </>
  )
}

export default App
