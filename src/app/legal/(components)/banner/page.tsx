"use client"

import styles from './Banner.module.css'
import { usePathname } from 'next/navigation'

export default function Banner () {

  const pathname = usePathname();

  return (
      <div className={styles.banner}>
          <h2 className={styles.heading}>
            {
              pathname === '/legal' ? "Regeln über Erwerb, Besitz und Anbau von Cannabis in Deutschland"
            : pathname === '/legal/anbauvereinigung' ? "Alles Wissenwerte über den gemeinschaftlichen Anbau" 
            : pathname === '/legal/geschaeft' ? "Aktuelle gesetzliche Grundlagen für Unternehmen: Von der Produktion bis zum Vertrieb"
            : ""}</h2>
        <h1 className={styles.subheading}>
          {
            pathname === '/legal' ? "Kenne deine Rechte als Cannabiskonsument" 
          : pathname === '/legal/anbauvereinigung' ? "Neue Regeln für Mitglieder und Gründer von Anbauvereinigungen"
          : pathname === '/legal/geschaeft' ? "Gesetzliche Bestimmungen für dein Cannabisgeschäft" 
          : ""}</h1>
      </div>)
}