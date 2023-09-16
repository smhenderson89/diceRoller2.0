import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h3>Dice Roller App</h3>
      </div>
    </main>
  )
}
