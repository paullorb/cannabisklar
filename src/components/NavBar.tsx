"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';

import styles from './styles/NavBar.module.css';

export default function NavBar() {
  const pathname = usePathname();
  return (
    <nav className={styles.nav}>
      <Link 
        href="/" 
        className={pathname === '/' ? styles.active && styles.Link : styles.Link}>
        Home
      </Link>
      <Link 
        href="/users" 
        className={pathname === '/users' ? styles.active && styles.Link : styles.Link}>
        Users
      </Link>
    </nav>
  );
}