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
import { useMemo } from 'react'
import { io } from 'socket.io-client'
import SocketContext from './contexts/SocketContext'

function App() {
  const value = useMemo(() => io('http://localhost:3000'), [])
  return (
    <>
      <div>
      <SocketContext.Provider value={value}>
        <Layout
          header={<Header />}
        />
        <Routes>
          <Route path='/' element={<Login />} />
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
      </SocketContext.Provider>
        

      </div>
    </>
  )
}

export default App
