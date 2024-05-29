import styles from './NavVertical.module.css';

export default function NavVertical({ currentSection }: { currentSection: string }) {
  console.log('currentSection:', currentSection)
  return (
    <nav className={styles.nav}>
      <h1 className={`${styles.section} ${currentSection === 'section1' ? styles.active : ''}`}>Section 1</h1>
      <h1 className={`${styles.section} ${currentSection === 'section2' ? styles.active : ''}`}>Section 2</h1>
      <h1 className={`${styles.section} ${currentSection === 'section3' ? styles.active : ''}`}>Section 3</h1>
    </nav>
  );
}
