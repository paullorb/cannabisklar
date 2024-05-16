import styles from './styles/Feedback.module.css';

import Image from 'next/image';

export default function Feedback() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Feedback</h2>
      <div className={styles.icons}>
        <div className={styles.happy}>
          <Image className={styles.outline} src="/face-happy.svg" alt="happy face" width="25" height="25"/>
          <Image className={styles.solid} src="/face-happy-filled.svg" alt="happy face filled" width="25" height="25"/>
        </div>
        <div className={styles.sad}>
          <Image className={styles.outline} src="/face-sad.svg" alt="sad face" width="25" height="25"/>
          <Image className={styles.solid} src="/face-sad-filled.svg" alt="sad face filled" width="25" height="25"/>
        </div>
      </div>
    </div>
  )}