import Nav from './components/Nav';
import Home from './pages/Home';
import MarvelCharacters from './components/MarvelCharacters';
import About from './pages/About';
import './App.css'
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/characters' element={<MarvelCharacters/>}/>
      <Route path='/about' element={<About/>} />
    </Routes>
    </>
  )
}

export default App
