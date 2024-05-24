"use client";

import { useEffect, useState } from 'react';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

import useDeviceType from '@/hooks/useDeviceType.js'

import styles from './styles/NavPrimary.module.css'

export default function NavBar() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const deviceType = useDeviceType();
  const isMobile = isMounted && deviceType === 'mobile';
  const isDesktop = isMounted && deviceType === 'desktop';

  const pathname = usePathname();

  const legalize_it = {
    filter: 'grayscale(100%)',
  }

  return (
    <nav className={styles.nav} aria-label="primary">
      <div className={styles.tabs}>
      <Link 
        href="/" 
        className={pathname === '/' ? styles.active && styles.Link : styles.Link}>
        <Image src="/home.svg" alt="home" width="25" height="25"/>
        {isMobile && pathname === '/' || isDesktop && <h1 className={styles.linkTitle}>Haus</h1>}
      </Link>
      <Link 
        href="/legal" 
        className={pathname === '/legal' ? styles.active && styles.Link : styles.Link}>
        <Image src="/legal.svg" alt="legal" width="25" height="25"/>
        {isMobile && pathname.startsWith('/legal') || isDesktop && <h1 className={styles.linkTitle}>Legal</h1>}
      </Link>
      <Link 
        href="/gesundheit" 
        className={pathname === '/gesundheit' ? styles.active && styles.Link : styles.Link}>
        <Image src="/health.svg" alt="company" width="25" height="25"/>
        {isMobile && pathname === '/gesundheit' || isDesktop && <h1 className={styles.linkTitle}>Gesundheit</h1>}
      </Link>
      <Link 
        href="/medien" 
        className={pathname === '/medien' ? styles.active && styles.Link : styles.Link}>
        <Image src="/news.svg" alt="company" width="25" height="25"/>
        {isMobile && pathname === '/medien' || isDesktop && <h1 className={styles.linkTitle}>Medien</h1>}
      </Link>
      </div>
      <div className={styles.world}>
      </div>
      {isMounted && isMobile && (
      <div className={styles.hamburger}>
            <Image src="/hamburger.svg" alt="hamburger" width="25" height="25" />
          </div>
          )}
    </nav>
  );
}