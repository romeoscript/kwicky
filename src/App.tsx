

import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Search from './pages/Search'
import Productpage from './pages/Productpage'
import Cart from './pages/Cart'
import Steppedpage from './pages/Steppedpage'

function App() {
 

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/search' element={<Search/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/process' element={<Steppedpage/>} />
        <Route path='/product/:id' element={<Productpage/>} />
      </Routes>
    </>
  )
}

export default App
