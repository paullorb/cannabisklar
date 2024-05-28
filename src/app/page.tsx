import Image from 'next/image'
import Link from 'next/link';
import styles from './App.module.css'

export default async function Home () {
  const gesetzLink = "https://www.bundesgesundheitsministerium.de/service/gesetze-und-verordnungen/detail/cannabisgesetz.html";
  return (
    <section className={styles.container}>

      <div className={styles.meldung}>
        <Image src="/information.svg" width="25" height="25" alt="information" />
        <h2 className={styles.notification}>Es ist legal Cannabis zu konsumieren und anzubauen in Deutschland, falls du 18 Jahre alt bist. Aber, wie Tabak und Alkohol, es gibt Gesetze die man vorher beachten soll.</h2>
      </div>
      <div>
        <h2>Besitz, Erhalt und Anbau von Cannabis in Deutschland</h2>
        <h3>Erwachsenen ist es ab dem 1. Juli 2024 erlaubt:</h3>
        <ul>
          <li>bis zu 50 Gramm zuhause besitzen und bis zu 25 Gram in der Öffentlichkeit</li>
          <li>bis zu 3 lebende weibliche Pflanzen zuhause haben</li>
        </ul>
        <p>Erwachsene dürfen auch von sogenannten <Link className={styles.link} href="/anbauvereinigung">Anbauvereinigungen</Link> erhalten, angenommen du bist Mitglied des Vereins oder der Genossenschaft, die nicht gewinnorientiert agiert.</p> {/* möglicherweise Falsch über Vereinen, muss geprüft werden */ }
      </div>
      <div className={styles.medcan}>
        <h2>Medizinisches Cannabis</h2>
        <h3>Cannabis zu medizinischen Zwecken darf nur von Ärzten verschrieben und in Apotheken gegen ein gültiges Rezept an Patienten abgegeben werden.</h3>
        <p>Seit dem 1. April 2024 können Ärzte medizinisches Cannabis auf normalem Rezept verordnen, ohne dass ein Betäubungsmittelrezept erforderlich ist.</p><p>Diese <a className={styles.link} href={gesetzLink}>Änderung<Image className={styles.extern} src="/extern.svg" width="16" height="16" alt="external link" /></a> ergibt sich aus dem neuen „Gesetz zum kontrollierten Umgang mit Cannabis und zur Änderung weiterer Vorschriften“.</p>
      </div>
      <div className={styles.konsum}>
        <h2>Konsum von Cannabis in Deutschland</h2>
        <h3>Das <a className={styles.link} href={gesetzLink}>Gesetz<Image className={styles.extern} src="/extern.svg" width="16" height="16" alt="external link" /></a> regelt nicht explizit, wo Cannabis konsumiert werden darf, sondern legt stattdessen fest, <span className={styles.underlineNOT}> wo es nicht erlaubt ist</span>, nämlich:</h3>
        <div className={styles.minors}>
          <p>in der Nähe von Minderjährigen,</p>
          <div className={styles.ulList}>innerhalb und in der Sichtweite (maximal 100m entfernt) von: 
            <p>Schulen,</p>
            <p>Kinderspielplätzen,</p>
            <p>Kinder und Jugendeinrichtungen,</p>
            <p>innnerhalb des befriedeten Eigentums von Anbauvereinigungen</p>
          </div>
          <p>In öffentlich zugänglichen Sportstätten,</p>
          <p>in Fußgängerzonen zwischen 7 und 20 Uhr und</p>
          <p>in militärischen Bereichen der Bundeswehr.</p>
        </div>
        <div className={styles.bubatz}>
          <h1 className={styles.bubatzIntro}>Hier hilft die Platform Bubatzkarte, erstellt von einem Entwickler aus Koblenz. Die: </h1>
          <Link className={styles.link} href="https://bubatzkarte.de/" target="_blank">Bubatzkarte<Image className={styles.extern} src="/extern.svg" width="16" height="16" alt="external link" /></Link>
        </div>
      </div>
      <div className={styles.kinder}>
        <h2>Kinder- und Jugendschutz</h2>
        <h3 className={styles.kinderIntro}>In Bezug auf die Jugendlichen:</h3>
        <div className={styles.kinderProtections}>
      <ul className={styles.protections}>

        <li className={styles.protections}><b>Konsumverbote nahe Minderjährigen:</b> Das Gesetz verbietet den Konsum von Cannabis in unmittelbarer Nähe von Personen unter 18 Jahren, um Jugendliche vor den Einflüssen und Risiken des Cannabiskonsums zu schützen.∂</li>

        <li className={styles.protections}><b>Einschränkungen im öffentlichen Raum:</b> Spezielle Zonen, wie Schulen, Spielplätze und Jugendeinrichtungen, sind als cannabisfreie Bereiche definiert, um sicherzustellen, dass Minderjährige in diesen Umgebungen nicht mit Cannabis in Kontakt kommen.</li>

        <li className={styles.protections}><b>Präventive Maßnahmen:</b> Anbauvereinigungen sind verpflichtet, präventive Maßnahmen durchzuführen und Aufklärungsarbeit zu leisten, die Jugendliche über die Risiken des Cannabiskonsums informieren.</li>
      </ul>
      </div>
      </div>
      <div className={styles.auto}>
        <h2>Auto fahren und Cannabis</h2>
        <h3>Die neuen Regelungen zum Cannabiskonsum am Steuer in Deutschland beinhalten strenge Strafen für Autofahrer, die die festgelegten THC-Grenzwerte überschreiten. </h3>
        <p>Der festgelegte Grenzwert für THC im Blut beträgt 3,5 Nanogramm pro Milliliter, ähnlich einer Blutalkoholkonzentration von 0,2 Promille. </p>
        <p>Überschreitungen dieses Wertes führen zu Geldbußen von bis zu 3.500 Euro, Fahrverboten und Punkten in Flensburg. Diese Maßnahmen sollen die Verkehrssicherheit erhöhen und den Mischkonsum von Cannabis und Alkohol streng ahnden.</p>
      </div>
      <div className={styles.besafe}>
        <h2 className={styles.safeHeading}>Sicherer Umgang mit Cannabis</h2>
        <p className={styles.safeIntro}>Ist es dein erstes Mal mit Cannabis, sei vorsichtig. Konsumiere verantwortlich.</p>
        <p className={styles.safeIntro}>Ein übermäßiger Konsum von Cannabis kann zu unerwünschten Nebenwirkungen führen.</p>
        <p className={styles.safeIntro}> Zu den Symptomen einer Überdosierung können gehören:</p>
        <ul>
          <li>Verwirrung, Angstzustände, Panik oder Paranoia</li>
          <li> Halluzinationen oder Wahnvorstellungen</li>
          <li>Erhöhter Blutdruck</li>
          <li>Schnneller Herzschlag</li>
          <li>Starke Übelkeit und Erbrechen</li>
        </ul>
        <p className={styles.outro}>Falls Sie oder jemand, den Sie kennen, eines der oben genannten Symptome aufweist, kontaktieren Sie sofort die Giftnotrufzentrale unter der Telefonnummer <a className={styles.link} href={`tel:${+4930340606602}`}>(030) 340 60 66-02</a> für Hilfe zu jeder Zeit.</p>
        <p className={styles.outro}>Bei schweren Symptomen rufen Sie umgehend den Notruf 112 an oder begeben Sie sich in die nächste Notaufnahme.</p>
        <p>Bitte beachten Sie, dass der Konsum von Cannabis erst ab 18 Jahren legal ist und in der Nähe von Schulen, Kindergärten und auf öffentlichen Spielplätzen sowie in Fußgängerzonen während der Hauptverkehrszeiten verboten bleibt.</p>
      </div>
    </section>
  );
}