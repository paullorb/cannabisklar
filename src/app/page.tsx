import Link from 'next/link';
import styles from './styles.module.css'

export default function Home () {
  return (
    <section className={styles.container}>
      <h1>Home</h1>
      <div className={styles.kurz}>
      <h2 className={styles.title}>Was ist jetzt neu?</h2>
      <div className={styles.voraussetzungen}>
          <p>Mindestalter von <span className={`${styles.important} ${styles.more}`}>18 Jahren</span></p>
        </div>
      <div className={styles.räumen}>
        <div className={`${styles.privater} ${styles.raum}`}>
          <h1>PRIVAT</h1>
          <p>bis zu <span className={styles.important}>50 Gramm</span> im Besitz erlaubt</p>
          <p> bis zu 3 lebende weibliche Pflanzen</p>
        </div>
        <div className={`${styles.öffentlicher} ${styles.raum}`}>
          <h1>ÖFFENTLICH</h1>
          <p>bis <span className={styles.important}>25 Gramm</span> im Besitz zuhause erlaubt</p>
          <p>in Fußgängerzonen ab 20 Uhr bis 7 Uhr morgens</p>
        </div>
      </div>
      </div>
      <div className={styles.bubatz}>
      <h2 className={styles.title}>Wo darf man rauchen?</h2>
      <Link className={styles.link} href="https://bubatzkarte.de/" target="_blank">Bubatzkarte</Link>
      </div>
      <div>
        <h1>Statistiken</h1>
      </div>
      <div>
        <h1>Nachrichten</h1>
      </div>

    </section>
  );
}