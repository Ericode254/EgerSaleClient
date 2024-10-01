import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/main/LandingPage'
import Home from './pages/main/Home'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
