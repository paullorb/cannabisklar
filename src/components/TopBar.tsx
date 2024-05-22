"use client"

import { format } from 'date-fns'
import styles from './styles/TopBar.module.css'

export default function TopBar () {

  const currentDate = format(new Date(), 'dd/MM')
  const currentHour = format(new Date(), 'HH')
  const currentMin = format(new Date(), 'mm')
  return (
    <div className={styles.container}>
      <div className={styles.internationalization}>
        <div className={`${styles.lang} ${styles.deutsch}`}>
          <button>deu</button>
        </div>
        <div className={`${styles.lang} ${styles.english}`}>
        <button>eng</button>
        </div>
        <div className={`${styles.lang} ${styles.espanol}`}>
        <button>esp</button>
        </div>
      </div>
        <div className={styles.updateContainer}>
          <h3 className={styles.updating}>letzte Aktualisierung:</h3>
          <div className={styles.update}>
            {<h3 className={styles.date}>{currentDate}</h3>}
            {<h3 className={styles.hour}>{currentHour}</h3>}
            <h3 className={styles.blinker}>:</h3>
            {<h3 className={styles.min}>{currentMin}</h3>
            }
          </div>
        </div>
    </div>
  )
}