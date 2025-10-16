import { useState } from 'react'
import { Link,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Patients from './pages/Patients'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return(
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/patients" element={<Patients />} />
      </Routes>
    </>
  )
}

export default App
