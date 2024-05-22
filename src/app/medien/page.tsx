"use client"

import React, { useEffect, useState } from 'react';
import styles from './Medien.module.css';
import { getTagesschau } from '../../../_actions/tagesschauAction';
import { ITagesschau } from '../../../interfaces/IPost';

export default function Medien() {
  const [data, setData] = useState<ITagesschau[]>([]); // Specify that data is an array of ITagesschau
  const [errMsg, setErrMsg] = useState<string>(''); // Explicitly define errMsg as a string

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getTagesschau();
        if (result.errMsg) {
          setErrMsg(result.errMsg);
        } else {
          setData(result.data || []);
        }
      } catch (error) {
        console.error('Failed to load data', error)
        setErrMsg('Failed to load data'); // More generic error if something goes wrong
      }
    };

    fetchData();
  }, []); // Empty array ensures this effect only runs once

  if (errMsg) {
    return <h1>{errMsg}</h1>; // Display error message if there is one
  }

  return (
    <section className={styles.container}>
      <h1>Medien</h1>
      <div className={styles.media}>
        <div className={styles.tagesschau}>
          <h1>Tagesschau</h1>
          {data.map((item) => (
            <p key={item._id.toString()}>{item.title}</p> // Correctly access title, ensure item has _id and title
          ))}
        </div>
      </div>
    </section>
  );
}
