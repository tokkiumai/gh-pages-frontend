import styles from './TextInput.module.scss'

function TextInput({ placeholder, className }) {
  return <input className={`${className} ${styles.input}`} placeholder={placeholder} />
}

export default TextInput