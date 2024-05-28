import styles from './Feedback.module.css';
import FeedbackIcons from './(components)/FeedbackIcons';

export default function Feedback() {

  return (
    <div className={styles.container}>
      <div className={styles.feedback}>
        <h1 className={styles.heading}>War dieser Artikel hilfreich?</h1>
        <FeedbackIcons />
      </div>
    </div>
  )}