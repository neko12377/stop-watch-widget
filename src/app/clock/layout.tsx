import { NavBar } from "@/app/ui/molecules"
import styles from './css/clock.module.css'
export default function ClockLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className={styles.layout}>
      <div className={styles.main}>
        {children}
      </div>
      <footer className={styles.footer}>
        <NavBar />
      </footer>
    </section>
  )
}