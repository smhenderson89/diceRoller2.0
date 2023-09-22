import styles from './page.module.css'
import DiceRoll from './components/DiceRoll'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <DiceRoll />
      </div>
    </main>
  )
}
