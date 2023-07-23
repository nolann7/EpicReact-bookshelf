// 🐨 you'll need to import react and createRoot from react-dom up here
import React from 'react'
import {createRoot} from 'react-dom/client'
import {Logo} from './components/logo'

function App() {
  return (
    <>
      <Logo width="90" height="90" />
      <h1>Bookshelf</h1>
      <button id="login-button" onClick={e => alert('login was clicked')}>
        Login
      </button>
      <br />
      <button id="register-button" onClick={e => alert('Register was clicked')}>
        Register
      </button>
    </>
  )
}
const root = document.getElementById('root')
createRoot(root).render(<App />)

export default App
