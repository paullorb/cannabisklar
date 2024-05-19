"use client";

import { useEffect, useState } from 'react';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

import useDeviceType from '../hooks/useDeviceType.js'

import styles from './styles/NavBar.module.css';

export default function NavBar() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const deviceType = useDeviceType();
  const isMobile = isMounted && deviceType === 'mobile';
  const pathname = usePathname();

  const legalize_it = {
    filter: 'grayscale(100%)',
  }
  
  return (
    <nav className={styles.nav}>
      <div className={styles.tabs}>
      <Link 
        href="/" 
        className={pathname === '/' ? styles.active && styles.Link : styles.Link}>
        <Image src="/home.svg" alt="home" width="25" height="25"/>
        <h1 className={styles.linkTitle}>Haus</h1>
      </Link>
      <Link 
        href="/nice" 
        className={pathname === '/nice' ? styles.active && styles.Link : styles.Link}>
        <Image src="/legalize-it.svg" alt="company" width="25" height="25" style={legalize_it}/>
        <h1 className={styles.linkTitle}>Cannabis</h1>
      </Link>
      <Link 
        href="/legal" 
        className={pathname === '/legal' ? styles.active && styles.Link : styles.Link}>
        <Image src="/legal.svg" alt="legal" width="25" height="25"/>
        <h1 className={styles.linkTitle}>Legal</h1>
      </Link>
      <Link 
        href="/bildung" 
        className={pathname === '/bildung' ? styles.active && styles.Link : styles.Link}>
        <Image src="/help.svg" alt="learn" width="25" height="25"/>
        <h1 className={styles.linkTitle}>Bildung</h1>
      </Link>
      <Link 
        href="/anbauvereinigung" 
        className={pathname === '/anbauvereinigung' ? styles.active && styles.Link : styles.Link}>
        <Image src="/business.svg" alt="company" width="25" height="25"/>
        <h1 className={styles.linkTitle}>Anbauvereinigung</h1>
      </Link>
      <Link 
        href="/gesundheit" 
        className={pathname === '/gesundheit' ? styles.active && styles.Link : styles.Link}>
        <Image src="/health.svg" alt="company" width="25" height="25"/>
        <h1 className={styles.linkTitle}>Gesundheit</h1>
      </Link>
      </div>
      <div className={styles.world}>
        <Image src="/globe.svg" alt="world" width="25" height="25" />
      </div>
      {isMounted && isMobile && (
      <div className={styles.hamburger}>
            <Image src="/hamburger.svg" alt="hamburger" width="25" height="25" />
          </div>
          )}
    </nav>
  );
}