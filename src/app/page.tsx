import Image from 'next/image'
import Link from 'next/link';
import styles from './App.module.css'
import Feedback from '@/components/Feedback'
import type { AppProps } from 'next/app'
import { Rubik } from '@next/font/google'

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['400', '700']
})

export default function Home ({Component, pageProps}: AppProps) {
  return (
    <section className={`${styles.container} ${rubik.className}`}>
      <Component {...pageProps} />
      <div className={styles.banner}>
        <h1 className={styles.heading}>Kenne deine Rechte als Cannabiskonsument</h1>
      </div>
      <div className={styles.meldung}>
        <Image src="/information.svg" width="25" height="25" alt="information" />
        <h2 className={styles.title}>Es ist legal Cannabis zu konsumieren und anzubauen in Deutschland, falls du 18 Jahre alt bist. Aber, wie Tabak und Alkohol, es gibt Gesetze die man vorher beachten soll.</h2>
      </div>
      <div className={styles.kurz}>
      <div className={styles.räumen}>
        <div className={`${styles.privater} ${styles.raum}`}>
          <h3>PRIVAT</h3>
          <p>bis zu <span className={styles.important}>50 Gramm</span> im Besitz erlaubt</p>
          <p> bis zu 3 lebende weibliche Pflanzen</p>
        </div>
        <div className={`${styles.öffentlicher} ${styles.raum}`}>
          <h3>ÖFFENTLICH</h3>
          <p>bis <span className={styles.important}>25 Gramm</span> im Besitz zuhause erlaubt</p>
          <p>in Fußgängerzonen ab 20 Uhr bis 7 Uhr morgens</p>
        </div>
      </div>
      </div>
      <div className={styles.unverändert}>
      <h2 className={styles.title}>Was bleibt gleich?</h2>
      <div className={styles.voraussetzungen}>
          <p><span className={`${styles.important} ${styles.more}`}>Minderjährigen</span> ist der Konsum und Erwerb von Cannabis verboten</p>
        </div>
      </div>
      <div className={styles.bubatz}>
      <h2 className={styles.title}>Wo darf man rauchen?</h2>
      <Link className={styles.link} href="https://bubatzkarte.de/" target="_blank">Bubatzkarte</Link>
      </div>
      <div className={styles.auto}>
      <h2 className={styles.title}>Darf ich bekifft auto fahren?</h2>
      </div>
      <div>
        <h1>Statistiken</h1>
      </div>
      <div>
        <h1>Nachrichten</h1>
      </div>
      <Feedback />
    </section>
  );
}