import styles from './Button.module.scss'

function Button({ children, className, onClick }) {
  return <button className={`${styles.button} ${className}`} onClick={onClick}>{children}</button>
}

export default Button