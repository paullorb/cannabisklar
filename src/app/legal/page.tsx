import styles from './Legal.module.css';

export default function Legal () {
  return (
    <div>
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
    </div>
  );
}