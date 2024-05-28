import styles from './styles/Feedback.module.css';

export default function Feedback() {
  return (
    <div className={styles.container}>
      <div className={styles.icons}>
        <h1 className={styles.heading}>War dieser Artikel hilfreich?</h1>
        <button className={styles.icon}>🤩</button>
        <button className={styles.icon}>😊</button>
        <button className={styles.icon}>☹️</button>
        <button className={styles.icon}>😭</button>
      </div>
    </div>
  )}