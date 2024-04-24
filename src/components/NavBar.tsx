"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';

import styles from './styles/NavBar.module.css';

export default function NavBar() {
  const pathname = usePathname();
  return (
    <nav>
      <Link 
        href="/" 
        className={pathname === '/' ? styles.active : ''}>
        Home
      </Link>
      <Link 
        href="/users" 
        className={pathname === '/users' ? styles.active : ''}>
        Users
      </Link>
    </nav>
  );
}