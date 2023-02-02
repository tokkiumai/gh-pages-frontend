import styles from './Button.module.scss'

function Button({ children, className }) {
  return <button className={`${styles.button} ${className}`}>{children}</button>
}

export default Button