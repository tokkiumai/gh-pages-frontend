import { useState, isValidElement } from 'react'
import styles from './TextInput.module.scss'

function TextInput({
  type,
  value,
  placeholder,
  required = false,
  pattern,
  minLength,
  onChange = () => {},
  onFocus,
  hasError,
  ValidationComponent,
  className
}) {
  const [showPassword, setShowPassword] = useState(false)
  const [inputHovered, setInputHovered] = useState(false)

  /** better to track hovering on an Icon element and change its display attr; maybe adding type condition for v.length */
  const shouldShowPasswordToggleIcon = inputHovered || value.length < 26

  function handleChange(event) {
    onChange(event)
  }

  function toggleShowPassword(event) {
    event.preventDefault()
    setShowPassword(state => !state)
  }

  function onMouseEnter() {
    setInputHovered(true)
  }

  function onMouseLeave() {
    setInputHovered(false)
  }

  return (
    <div className={`${className} ${styles.root}`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className={styles.inputWrapper}>
        <input
          className={`${styles.input} ${hasError ? styles.error : ''}`}
          placeholder={placeholder}
          required={required}
          pattern={pattern}
          minLength={minLength}
          onChange={handleChange}
          onFocus={onFocus}
          value={value}
          type={showPassword ? 'text' : type}
        />
        {type === 'password' && shouldShowPasswordToggleIcon && (
          <div className={styles.showPasswordIcon} onClick={toggleShowPassword} tabIndex="0" />
        )}
      </div>
      {isValidElement(ValidationComponent) && <div className={styles.validationRules}>{ValidationComponent}</div>}
    </div>
  )
}

export default TextInput