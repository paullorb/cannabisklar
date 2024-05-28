import styles from "./gesundheit.module.css";

export default function Gesundheit () {
  return (
    <div className={styles.container}>
      <h1>Gesundheit</h1>

        <div className={styles.werbeverbot}>
          <h2>Werbeverbot</h2>
          <p>Werbung und jede Form des Sponsorings für Cannabis und für Anbauvereinigungen sind verboten.</p>
        </div>
        <div className={styles.frühintervention}>
          <h2>Frühhilfe</h2>
          <p>Verstößt eine minderjährige Person gegen bestimmte Vorschriften, hat die zuständige Polizei- und Ordnungsbehörde unverzüglich die Personensorgeberechtigten zu informieren.</p>
        </div>
        <div className={styles.suchtprävention}>
          <h2>Prävention</h2>
          <h3>
            Die Bundeszentrale für gesundheitliche Aufklärung (BZgA) errichtet eine digitale Plattform, die nutzerfreundlich und adressatengerecht Informationen bereitstellt, insbesondere über:
          </h3>
          <ol>
          </ol>
        </div>

    </div>
  );
}