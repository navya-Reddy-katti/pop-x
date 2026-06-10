export default function InputField({
  id,
  name,
  label,
  required = false,
  error,
  className = '',
  type = 'text',
  ...rest
}) {
  const inputId = id || name
  return (
    <div className={`field ${error ? 'has-error' : ''} ${className}`.trim()}>
      {label && (
        <label htmlFor={inputId}>
          {label}
          {required && <span className="req">*</span>}
        </label>
      )}
      <input id={inputId} name={name} type={type} {...rest} />
      {error && <div className="error-text">{error}</div>}
    </div>
  )
}
