"use client";

import styles from '../Medien.module.css';
import Link from 'next/link';

// Adjusted interface for client-side use
interface ITagesschauClient {
  _id: string;
  title: string;
  detailsweb: string;
  date: string;
}

interface MedienProps {
  data: ITagesschauClient[];
  errMsg: string;
}

const MedienComponent: React.FC<MedienProps> = ({ data, errMsg }) => {
  if (errMsg) {
    return <h1>{errMsg}</h1>;
  }

    // Filter out duplicate titles
    const seenTitles = new Set();
    const filteredData = data.filter(item => {
      if (seenTitles.has(item.title)) {
        return false;
      } else {
        seenTitles.add(item.title);
        return true;
      }
    });

  return (
    <section className={styles.container}>
        <h1 className={styles.heading}> Medien</h1>
      <div className={styles.intro}>
        <h2 className={styles.subheading}>Aktualisiert: </h2>
        {<h2 className={styles.subsubheading}>22.05.2024</h2>}
      </div>
      <div className={styles.media}>
        <div className={styles.tagesschau}>
          <h1>Tagesschau</h1>
          {filteredData.map((item) => {
            const date = new Date(item.date);
            const formattedDate = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
            return item.detailsweb ? (
              <Link key={item._id} href={item.detailsweb} className={styles.link} target="_blank">
                <div className={styles.item}>
                  <h2 className={styles.title}>{item.title}</h2>
                  <span className={styles.date}>{formattedDate}</span>
                </div>
              </Link>
            ) : (
              <div key={item._id} className={`${styles.item} ${styles.disabled}`}>
                <h2 className={styles.title}>{item.title}</h2>
                <span className={styles.date}>{formattedDate}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MedienComponent;
