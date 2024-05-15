import Link from 'next/link';
import styles from './App.module.css'
import Feedback from '@/components/Feedback'

export default function Home () {
  return (
    <section className={styles.container}>
      <h1>Home</h1>
      <div className={styles.kurz}>
      <h2 className={styles.title}>Was ist jetzt neu?</h2>
      <div className={styles.voraussetzungen}>
          <p><span className={`${styles.important} ${styles.more}`}>18 Jährigen</span> ist der Konsum von Cannabis erlaubt</p>
        </div>
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
      <h2 className={styles.title}>Darf ich auto fahren bekifft?</h2>
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