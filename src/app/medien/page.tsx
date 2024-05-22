"use client";

import React from 'react';
import styles from './Medien.module.css';
import Link from 'next/link';

// Adjusted interface for client-side use
interface ITagesschauClient {
  _id: string;
  title: string;
  updateCheckUrl: string;
}

interface MedienProps {
  data: ITagesschauClient[];
  errMsg: string;
}

const MedienComponent: React.FC<MedienProps> = ({ data, errMsg }) => {
  if (errMsg) {
    return <h1>{errMsg}</h1>;
  }

  return (
    <section className={styles.container}>
      <h1>Medien</h1>
      <div className={styles.media}>
        <div className={styles.tagesschau}>
          <h1>Tagesschau</h1>
          {data.map((item) => (
            <Link key={item._id} href={item.updateCheckUrl} className={styles.link}>
              <h2 className={styles.title}>{item.title}</h2>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MedienComponent;
