"use client"

import { useState } from "react"
import styles from './FeedbackIcons.module.css'


export default function FeedbackIcons () {

  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [selectedEmoji, setSelectedEmoji] = useState('')
  const [moreFeedback, setMoreFeedback] = useState(false)

  const handleMoreFeedback = (emoji: string) => {
    setSelectedEmoji(emoji)
    setMoreFeedback(true)
  }

const handleSubmit = async (e: { preventDefault: () => void }) => {
  e.preventDefault()
  try {
  const res = await fetch("/api/feedback", {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      selectedEmoji,
      message,
    }),
  })
  if (!res.ok) {
    throw new Error('Failed to send feedback')
  }
    setSelectedEmoji('')
    setMessage('')
    setMoreFeedback(false)
  } catch (error:any) {
    setError(error.message)
  }
}

  return  (
    <div>
      <div className={styles.icons}>
        <button 
          type="button" 
          className={`${styles.icon} ${selectedEmoji === '🤩' ? styles.selected : ''}`} 
          onClick={() => handleMoreFeedback('🤩')}
        >🤩</button>
        <button 
          type="button" 
          className={`${styles.icon} ${selectedEmoji === '😊' ? styles.selected : ''}`} 
          onClick={() => handleMoreFeedback('😊')}
        >😊</button>
        <button 
          type="button" 
          className={`${styles.icon} ${selectedEmoji === '🤨' ? styles.selected : ''}`} 
          onClick={() => handleMoreFeedback('🤨')}
        >🤨</button>
        <button 
          type="button" 
          className={`${styles.icon} ${selectedEmoji === '😭' ? styles.selected : ''}`} 
          onClick={() => handleMoreFeedback('😭')}
        >😭</button>
      </div>

      {moreFeedback && (
        <form onSubmit={handleSubmit}>
          <p className={styles.danke}>Danke für deine Meinung!</p>
          <div className={styles.field}>
            <textarea
              className={styles.textarea}
              placeholder="Besonders aufgefallen hat mich ..."
              rows={3}
              value={message}
              onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(event.target.value)}
            />
            <button type="submit" className={styles.submit}>Senden</button>
          </div>
        </form>
      )}
    </div>
  );
}