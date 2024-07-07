import styles from './Button.module.css'

function Button({ onClick, children, title, disable = false }) {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      disabled={disable}
      title={title}
    >
      {children}
    </button>
  )
}

export default Button
