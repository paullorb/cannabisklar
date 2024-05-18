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
      <div>
        <h1>Rechte einer Anbauvereinigung</h1>
      </div>
      <div>
        <h1>Pflichten einer Anbauvereinigung</h1>
        <div>
          <h2>Satzung</h2>
          <p>Muss enthalten:</p>
          <p>- Mindestdauer der Mitgliedschaft von drei Monaten</p>
          <p>- Mitglieder 18 Jahre alt sein sollen</p>
          <p>- Mitglieder einen Wohnsitz oder gewöhnlichen Aufenthalt in Deutschland haben müssen</p>
          <p>-  nicht vorgesehen wird, dass der Erwerb und die Fortdauer der Mitgliedschaft an einen Wohnsitz oder einen
gewöhnlichen Aufenthalt in Deutschland geknüpft werden, </p>
        </div>
      </div>
    </section>
  );
}