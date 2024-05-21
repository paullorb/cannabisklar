"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import useDeviceType from '@/hooks/useDeviceType.js'
import { useState, useEffect } from 'react'

import styles from './NavLegal.module.css'

export default function NavLegal () {

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])
  const deviceType = useDeviceType();
  const isMobile = isMounted && deviceType === 'mobile';
  const isDesktop = isMounted && deviceType === 'desktop';
  const pathname= usePathname()

  return (
    <nav className={styles.nav}>
      <Link 
        href="/legal"
        className={styles.Link}>
        <Image src="/summary.svg" alt="allgemein" width="30" height="30" />
        {pathname === '/legal' ? <h1 className={styles.title}>Allgemeines</h1> : null}
      </Link>
      <Link 
        href="/legal/anbauvereinigung"
        className={styles.Link}>
        <Image src="/together.svg" alt="anbauvereinigung" width="30" height="30" />
        {pathname === '/legal/anbauvereinigung' ? <h1 className={styles.title}>Anbauvereinigung</h1> : null}
      </Link>
      <Link 
        href="/legal/geschaeft"
        className={styles.Link}>
        <Image src="/shop.svg" alt="geschäft" width="30" height="30" />
        {pathname === '/legal/geschaeft' ? <h1 className={styles.title}>Geschäft</h1> : null}
      </Link>
    </nav>
  )
}