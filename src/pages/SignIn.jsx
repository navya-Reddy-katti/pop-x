import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button.jsx'
import InputField from '../components/InputField.jsx'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function SignIn() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})

  const validate = (values) => {
    const e = {}
    if (!values.email.trim()) e.email = 'Email address is required'
    else if (!EMAIL_RE.test(values.email.trim()))
      e.email = 'Enter a valid email address'
    if (!values.password) e.password = 'Password is required'
    return e
  }

  const onChange = (e) => {
    const { name, value } = e.target
    const next = { ...form, [name]: value }
    setForm(next)
    if (touched[name] || Object.keys(errors).length) {
      setErrors(validate(next))
    }
  }

  const onBlur = (e) => {
    const { name } = e.target
    setTouched((t) => ({ ...t, [name]: true }))
    setErrors(validate(form))
  }

  const canSubmit = form.email.trim() !== '' && form.password.trim() !== ''

  const onSubmit = (e) => {
    e.preventDefault()
    const v = validate(form)
    setErrors(v)
    setTouched({ email: true, password: true })
    if (Object.keys(v).length > 0) return
    localStorage.setItem(
      'popx_user',
      JSON.stringify({ name: 'Marry Doe', email: form.email }),
    )
    navigate('/account')
  }

  return (
    <div className="form-page">
      <h2>
        Signin to your
        <br /> PopX account
      </h2>
      <p className="muted">
        Lorem ipsum dolor sit amet,
        <br />
        consectetur adipiscing elit,
      </p>

      <form className="form" onSubmit={onSubmit} noValidate>
        <InputField
          name="email"
          type="email"
          label="Email Address"
          placeholder="Enter email address"
          value={form.email}
          onChange={onChange}
          onBlur={onBlur}
          error={errors.email}
        />

        <InputField
          name="password"
          type="password"
          label="Password"
          placeholder="Enter password"
          value={form.password}
          onChange={onChange}
          onBlur={onBlur}
          error={errors.password}
        />

        <Button type="submit" disabled={!canSubmit}>
          Login
        </Button>
      </form>
    </div>
  )
}
