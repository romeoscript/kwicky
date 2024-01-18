



import Home from './pages/Home'
import Search from './pages/Search'
import Productpage from './pages/Productpage'
import Cart from './pages/Cart'
import Steppedpage from './pages/Steppedpage'
import { Route, Routes } from 'react-router-dom'
import { useScrollto } from './hooks/useScrollto'
import Categories from './pages/Categories'

function App() {
  useScrollto();

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/search' element={<Search/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/process' element={<Steppedpage/>} />
        <Route path='/product/:id' element={<Productpage/>} />
        <Route path='/category/:companyname/:id' element={<Categories/>} />
        <Route path='/category/:companyname/' element={<Categories/>} />
      </Routes>
    </>
  )
}

export default App
