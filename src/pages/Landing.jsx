import { useNavigate } from 'react-router-dom'
import Button from '../components/Button.jsx'

export default function Landing() {
  const navigate = useNavigate()

  return (
    <div className="landing">
      <h1>
        Welcome to PopX
      </h1>
      <p className="subtitle">
        Lorem ipsum dolor sit amet,
        <br />
        consectetur adipiscing elit,
      </p>
      <div className="actions">
        <Button onClick={() => navigate('/register')}>Create Account</Button>
        <Button variant="secondary" onClick={() => navigate('/login')}>
          Already Registered? Login
        </Button>
      </div>
    </div>
  )
}
