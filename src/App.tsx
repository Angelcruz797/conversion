import { Route, Routes } from 'react-router'
import Home from './pages/home/Home'
import HomeScreen from './pages/home/components/HomeScreen'
import Convertor from './pages/convertor/Convertor'
import './index.css'
import SumBinaria from './pages/sumBinaria/SumBinaria'


function App() {
  return (
    <>
      <div className="h-screen fixed w-full">
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/*' element={<HomeScreen />} />
            <Route path='/convertor/:id' element={<Convertor />} />
            <Route path='/sum-binaria' element={<SumBinaria />} />
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
