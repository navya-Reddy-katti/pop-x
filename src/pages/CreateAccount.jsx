import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button.jsx'
import InputField from '../components/InputField.jsx'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_RE = /^[0-9]{10}$/

export default function CreateAccount() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: '',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = (values) => {
    const e = {}
    if (!values.fullName.trim()) e.fullName = 'Full name is required'
    if (!values.phone.trim()) e.phone = 'Phone number is required'
    else if (!PHONE_RE.test(values.phone.trim()))
      e.phone = 'Phone number must be exactly 10 digits'
    if (!values.email.trim()) e.email = 'Email address is required'
    else if (!EMAIL_RE.test(values.email.trim()))
      e.email = 'Enter a valid email address'
    if (!values.password) e.password = 'Password is required'
    else if (values.password.length < 6)
      e.password = 'Password must be at least 6 characters'
    if (!values.isAgency) e.isAgency = 'Please select an option'
    return e
  }

  const onChange = (e) => {
    let { name, value } = e.target
    // Phone: only digits, max 10
    if (name === 'phone') {
      value = value.replace(/\D/g, '').slice(0, 10)
    }
    const next = { ...form, [name]: value }
    setForm(next)
    // Only re-validate live after the user has tried to submit once
    if (submitted) {
      setErrors(validate(next))
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const v = validate(form)
    setErrors(v)
    setSubmitted(true)
    if (Object.keys(v).length > 0) return

    // Persist a minimal user for the welcome page (no backend)
    localStorage.setItem(
      'popx_user',
      JSON.stringify({ name: form.fullName, email: form.email }),
    )
    navigate('/account')
  }

  return (
    <div className="form-page">
      <h2>
        Create your
        <br /> PopX account
      </h2>

      <form className="form" onSubmit={onSubmit} noValidate>
        <InputField
          name="fullName"
          label="Full Name"
          required
          placeholder="Marry Doe"
          value={form.fullName}
          onChange={onChange}
          error={errors.fullName}
        />

        <InputField
          name="phone"
          type="tel"
          inputMode="numeric"
          label="Phone number"
          required
          placeholder="Marry Doe"
          value={form.phone}
          onChange={onChange}
          error={errors.phone}
        />

        <InputField
          name="email"
          type="email"
          label="Email address"
          required
          placeholder="Marry Doe"
          value={form.email}
          onChange={onChange}
          error={errors.email}
        />

        <InputField
          name="password"
          type="password"
          label="Password "
          required
          placeholder="Marry Doe"
          value={form.password}
          onChange={onChange}
          error={errors.password}
        />

        <InputField
          name="company"
          label="Company name"
          placeholder="Marry Doe"
          value={form.company}
          onChange={onChange}
        />

        <div className="radio-group">
          <div className="label-text">
            Are you an Agency?<span className="req">*</span>
          </div>
          <div className="radio-row">
            <label>
              <input
                type="radio"
                name="isAgency"
                value="yes"
                checked={form.isAgency === 'yes'}
                onChange={onChange}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="isAgency"
                value="no"
                checked={form.isAgency === 'no'}
                onChange={onChange}
              />
              No
            </label>
          </div>
          {errors.isAgency && (
            <div className="error-text">{errors.isAgency}</div>
          )}
        </div>

        <div className="submit-area">
          <Button type="submit">Create Account</Button>
        </div>
      </form>
    </div>
  )
}
