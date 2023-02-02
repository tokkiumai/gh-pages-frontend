import styles from './Rules.module.scss'

function Rules({ entries }) {
  return (
    <div className={styles.root}>
      {entries.map(rule => (
        <div key={rule.name} className={`${styles.rule} ${rule.checked ? styles.checked : ''}`}>
          <span className={styles.name}>{rule.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Rules
