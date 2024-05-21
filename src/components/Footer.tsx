import Image from 'next/image'
import Link from 'next/link'

import styles from './styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
      <h2>Feedback</h2>
      <h2>Über uns</h2>
      </div>
      <Link
      href="https://github.com/paullorb/cannabisklar/">
      <Image src="/github-mark-white.svg" width="25" height="25" alt="Github" />
      </Link>
    </footer>
  );
}