import styles from './styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
      <h2>Feedback</h2>
      <h2>Über uns</h2>
      </div>
    </footer>
  );
}