export default function Button({
  variant = 'primary',
  type = 'button',
  className = '',
  children,
  ...rest
}) {
  const variantClass =
    variant === 'secondary' ? 'btn-secondary' : 'btn-primary'
  return (
    <button
      type={type}
      className={`${variantClass} ${className}`.trim()}
      {...rest}
    >
      {children}
    </button>
  )
}
