import styles from './Legal.module.css';

export default function Legal () {
  return (
    <section>
      <div className={styles.banner}>
        <h1 className={styles.heading}>Kenne deine Rechte als Cannabiskonsument</h1>
        <h2 className={styles.subheading}>Regeln über Erwerb, Besitz und Anbau von Cannabis in Deutschland</h2>
      </div>

      <div className={styles.wenn}>
        <h2 className={styles.title}>Erwachsene dürfen:</h2>
      </div>
      <div className={styles.räumen}>
        <div className={`${styles.privater} ${styles.raum}`}>
          <h3>PRIVATER RAUM</h3>
          <p>bis zu <span className={styles.important}>50 Gramm</span> im Besitz</p>
          <p> bis zu 3 lebende weibliche Pflanzen</p>
        </div>
        <div className={`${styles.öffentlicher} ${styles.raum}`}>
          <h3>ÖFFENTLICHER RAUM</h3>
          <p>bis <span className={styles.important}>25 Gramm</span> im Besitz zuhause.</p>
          <p>in Fußgängerzonen ab 20 Uhr bis 7 Uhr morgens</p>
        </div>
      </div>
      <div>
        <h3 className={styles.subtitle}>Was ist CanG?</h3>
        <p>Das Cannabis-Gesetz (CanG) wurde am 1. April 2024 eingeführt und legalisiert den Cannabis-Konsum für Erwachsene in Deutschland. </p>
        <p>Die Ziele des Gesetzes sind, den illegalen Markt einzudämmen, die Qualität von Cannabis zu kontrollieren, die Aufklärung und Prävention zu verbessern, sowie den Kinder- und Jugendschutz zu stärken.</p>
      </div>
      <h1>Was ist legal?</h1>
      {/* Voraussetzungen */}
      <ul>
        <li>Der öffentliche Konsum von Cannabis ist beschränkt. So gilt zum Beispiel ein Konsumverbot in Fußgängerzonen von 7 bis 20 Uhr. </li>
        <li>Für Minderjährige bleibt der Besitz von Cannabis nach wie vor verboten. Zudem bestehen Sonderregelungen für junge Erwachsene – mit geringeren Abgabemengen und reduzierten THC-Gehalten.</li>
        <li>Der Besitz von bis zu 25 Gramm getrocknetem Cannabis ist nun straffrei. Dies gilt für den öffentlichen Raum. Für den privaten Raum gilt die Grenze von 50 Gramm getrocknetem Cannabis.</li>
        <li>Cannabis darf nicht in Gegenwart von Jugendlichen konsumiert werden . Darüber hinaus wird es ein Konsumverbot in Sichtweite zum Beispiel von Schulen, Kinderspielplätzen, Kinder- und Jugendeinrichtungen oder Sportstätten geben. </li>
        <li>Cannabis an Minderjährige weiterzugeben, bleibt eine Straftat.</li>
        <li>Minderjährige dürfen Cannabis auch weiterhin weder erwerben noch konsumieren.</li>
      </ul>
      <h2>Was kommt am 1.7.24?</h2>
      <h2>Was kommt am 1.1.25?</h2>
    </section>
  );
}