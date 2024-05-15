import styles from './styles/Feedback.module.css';

import Image from 'next/image';

export default function Feedback() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Feedback</h2>
      <div className={styles.icons}>
      <Image src="/face-happy.svg" alt="happy face" width="25" height="25"/>
      <Image src="/face-sad.svg" alt="sad face" width="25" height="25"/>
      </div>
    </div>
  )}