"use client"

import React, { useEffect, useState } from 'react';
import styles from './Medien.module.css';
import { getTagesschau } from '../../../_actions/tagesschauAction';
import { ITagesschau } from '../../../interfaces/IPost';
import Link from 'next/link';

// Adjusted interface for client-side use
interface ITagesschauClient {
  _id: string;
  title: string;
  updateCheckUrl: string;
}

export default function Medien() {
  const [data, setData] = useState<ITagesschauClient[]>([]);
  const [errMsg, setErrMsg] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getTagesschau();
        if (result.errMsg) {
          setErrMsg(result.errMsg);
        } else {
          
          const simplifiedData = result.data?.map(item => ({
            _id: item._id.toString(), 
            title: item.title,
            updateCheckUrl: item.updateCheckUrl,
          })) || [];
          setData(simplifiedData);
        }
      } catch (error) {
        console.error('Failed to load data', error);
        setErrMsg('Failed to load data');
      }
    };

    fetchData();
  }, []);

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
            // eslint-disable-next-line react/jsx-key
            <Link key={item._id} href={item.updateCheckUrl} className={styles.link}>
              <h2 className={styles.title}>{item.title}</h2>
            </Link>
              ))}
        </div>
      </div>
    </section>
  );
}
