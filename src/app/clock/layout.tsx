'use client'
import { NavBar } from "@/app/ui/molecules"
import styles from './css/clock.module.css'
import type { IIconLabel, INavBar } from '@/app/interfaces';
import { clockNavOptions } from "@/app/enums";
import { StopwatchIconLabel, WorldClockIconLabel, AlarmIconLabel, TimerIconLabel } from '@/app/ui/atoms';

export default function ClockLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const navOptions: { id: clockNavOptions, component: React.FC<IIconLabel>, path: string }[] = [
    { id: clockNavOptions.worldClock, component: WorldClockIconLabel, path: '/clock/world-clock' },
    { id: clockNavOptions.alarm, component: AlarmIconLabel, path: '/clock/alarm' },
    { id: clockNavOptions.stopwatch, component: StopwatchIconLabel, path: '/clock/stopwatch' },
    { id: clockNavOptions.timer, component: TimerIconLabel, path: '/clock/timer' },
  ];


  return (
    <section className={styles.layout}>
      <div className={styles.main}>
        {children}
      </div>
      <footer className={styles.footer}>
        <NavBar options={navOptions} defaultValue={clockNavOptions.stopwatch}/>
      </footer>
    </section>
  )
}