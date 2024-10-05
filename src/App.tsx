import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/main/LandingPage'
import Home from './pages/main/Home'
import SignUp from './pages/auth/SignUp'
import SignIn from './pages/auth/SignIn'
import About from './pages/about/About'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
