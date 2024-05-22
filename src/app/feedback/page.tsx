
import styles from './Feedback.module.css'
import SubmitButton from "@/components/SubmitButton"

export default function feedback () {
  return (
    <div>
      <h1>Feedback</h1>
      <form className={styles.form}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
        <SubmitButton />
      </form>
    </div>
  )
}