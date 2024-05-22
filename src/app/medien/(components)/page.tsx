import { useState, useEffect } from 'react'
import styles from './Medien.module.css'
import { ITagesschau } from '../../../../interfaces/IPost'
import { getTagesschau } from '../../../../_actions/tagesschauAction'


export default async function Medien (): Promise<JSX.Element> {
  const {data, errMsg } = await getTagesschau()
  console.log(data)

  if(errMsg) {
    return <h1>{errMsg}</h1>
  } 

  return (
    <section className={styles.container}>
      <h1>Medien</h1>
      <div className={styles.media}>
      <div className={styles.tagesschau}>
        <h1>Tagesschau</h1>
      </div>
      </div>
    </section>
  )
}