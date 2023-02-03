import { useState } from 'react'
import styles from './App.module.scss'

import TextInput from "./components/TextInput";
import Button from "./components/Button";

import {
  normalizePassword,
  validatePassword,
  PASSWORD_MIN_LENGTH,
  validateEmail,
  EmailRegExp
} from "./inputsValidation";
import Rules from "./components/Rules";

function App() {
  const [formState, setFormState] = useState({
    email: '',
    emailError: true,
    password: '',
    passwordError: true,
  })
  const [errors, setErrors] = useState({ email: false, password: false })

  function handleEmailChange(event) {
    const value = event.target.value
    const isValid = validateEmail(value)

    setFormState(state => ({ ...state, email: value, emailError: !isValid }))
    setErrors(state => ({ ...state, email: false }))
  }

  function handlePasswordChange(event) {
    const value = normalizePassword(event.target.value)
    const { isLowerCase, isUpperCase, isNumber, isMinLength } = validatePassword(value)

    setFormState(state => ({
      ...state,
      password: value,
      passwordError: !isLowerCase || !isUpperCase || !isNumber || !isMinLength
    }))
    setErrors(state => ({ ...state, password: false }))
  }

  function onSubmit(event) {
    event.preventDefault()

    const { email, password } = formState

    if (formState.passwordError && formState.emailError) {
      setErrors({ email: formState.emailError, password: formState.passwordError })
      return
    }

    const data = new FormData()
    data.append('email', email)
    data.append('password', password)

    // POST request
  }

  function renderRules() {
    const { isLowerCase, isUpperCase, isNumber, isMinLength } = validatePassword(formState.password)
    const rules = [
      { name: 'Contains lower case letters', checked: isLowerCase },
      { name: 'Contains upper case letters', checked: isUpperCase },
      { name: 'Contains numbers', checked: isNumber },
      { name: `More than ${PASSWORD_MIN_LENGTH} length`, checked: isMinLength },
    ]

    return (
      <Rules entries={rules} />
    )
  }

  return (
    <div className={styles.root}>

      <div className={styles.formWrapper}>
        <form className={styles.form} onSubmit={onSubmit}>
          <p className={styles.headerText}>Sign in</p>

          <TextInput
            className={styles.textInput}
            value={formState.email}
            onChange={handleEmailChange}
            required
            pattern={EmailRegExp}
            placeholder="Email"
            type="email"
            hasError={errors.email}
          />
          <TextInput
            className={styles.textInput}
            value={formState.password}
            onChange={handlePasswordChange}
            required
            minLength={PASSWORD_MIN_LENGTH}
            ValidationComponent={renderRules()}
            placeholder="Password"
            type="password"
            hasError={errors.password}
          />

          {/* Password rules */}

          {/* OAuth's icons in-line section */}

          <Button className={styles.signInButton} onClick={onSubmit}>
            Sign in
          </Button>
        </form>

        <div className={styles.signUp}>
          <p className={styles.dontHaveAnAccount}>Don't have an account?</p>
          <button className={styles.signUpLink}>Sign up</button>
        </div>
      </div>

    </div>
  );
}

export default App;
