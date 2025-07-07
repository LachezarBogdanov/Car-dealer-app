import './App.css'
import Create from './components/Create/Create'
import Details from './components/Details/Details'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Navigation from './components/Navigation/Navigation'
import Register from './components/Register/Register'

function App() {

  return (
    <>
    <div className="main">
     <Header />
    </div>
    <div className="aside-menu">
     <Navigation />
    </div>

    <div className="content">
      <Login />
    </div>
    </>
  )
}

export default App
