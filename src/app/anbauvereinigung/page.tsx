import styles from './Anbauvereinigung.module.css';

export default function Anbauvereinigungen () {
  return (
    <section>
      <h1>Unternehmen</h1>
    <ul>
      <li>Die Einfuhr von Cannabis aus dem Ausland nach Deutschland bleibt hingegen verboten.</li>
      <li>Es gibt ein allgemeines Werbe- und Sponsoringverbot für Konsumcannabis und für Anbauvereinigungen.</li>
    </ul>
    <h1>Anbauvereinigungen</h1>
    <ul>
      <li>Minderjährige dürfen Anbauvereinigungen nicht beitreten. An 18- bis 21-jährige Mitglieder darf in Anbauvereinigungen nur Cannabis mit einem begrenzten THC-Gehalt weitergegeben werden.</li>
    </ul>
    <div className={styles.comparison}>
      <div className={styles.card}>
        <h1 className={styles.heading}>Verein</h1>
        </div>
        <div className={styles.card}>
          <h1 className={styles.heading}>Genossenschaft</h1>
          <p>ein Zusammenschluss mehrerer natürlicher oder juristischer Personen, deren Ziel die gegenseitige Förderung durch gemeinsame wirtschaftliche Tätigkeit ist.</p>
          </div>
    </div>
    </section>
  );
}