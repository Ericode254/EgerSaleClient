import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/main/LandingPage'
import Home from './pages/main/Home'
import SignUp from './pages/auth/SignUp'
import SignIn from './pages/auth/SignIn'
import About from './pages/about/About'
import ForgotPassword from './pages/auth/ForgotPassword'
import ResetPassword from './pages/auth/ResetPassword'
import { AuthProvider } from './pages/auth/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/auth/signup" element={<SignUp />} />
          <Route path="/auth/signin" element={<SignIn />} />
          <Route path="/about" element={<About />} />
          <Route path='/auth/forgot-password' element={<ForgotPassword />} />
          <Route path='/auth/reset-password' element={<ResetPassword />} />
        </Routes>
      </AuthProvider>
    </>
  )
}

export default App
