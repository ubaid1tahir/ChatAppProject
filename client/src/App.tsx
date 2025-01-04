import './App.css'
import Login from './components/Login'
import {Routes, Route} from 'react-router-dom'
import Signup from './components/Signup'
import ProtectedRoute from './components/ProtectedRoute'
import MessagePage from './pages/MessagePage'

function App() {

  return (
    <>
      <div>
        <h1>Firebase Auth with React & TypeScript</h1>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Signup />} />
          <Route
          path="/messages"
          element={
            <ProtectedRoute>
              <MessagePage />
            </ProtectedRoute>
          }
        />
        </Routes>
        
      </div>
    </>
  )
}

export default App
