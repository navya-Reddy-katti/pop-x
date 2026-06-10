import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing.jsx'
import CreateAccount from './pages/CreateAccount.jsx'
import SignIn from './pages/SignIn.jsx'
import AccountSettings from './pages/AccountSettings.jsx'
import './App.css'

function App() {
  return (
    <div className="app-shell">
      <div className="phone-frame">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<CreateAccount />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/account" element={<AccountSettings />} />
        </Routes>
      </div>
    </div>
  )
}

export default App

