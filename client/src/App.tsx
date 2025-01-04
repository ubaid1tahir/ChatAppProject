import './App.css'
import Login from './components/Login'
import { Routes, Route } from 'react-router-dom'
import Signup from './components/Signup'
import ProtectedRoute from './components/ProtectedRoute'
import MessagePage from './pages/MessagePage'
import Layout from './layout/Layout'
import Sidebar from './components/Sidebar'
import ChatWindow from './components/ChatWindow'
import Header from './components/Header'

function App() {
  return (
    <>
      <div>
        <Layout
          header={<Header />}
        />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Signup />} />
          <Route
            path="/messages"
            element={
              <ProtectedRoute>
                <MessagePage sidebar={<Sidebar />} chatWindow={<ChatWindow />} />
              </ProtectedRoute>
            }
          />
        </Routes>

      </div>
    </>
  )
}

export default App
