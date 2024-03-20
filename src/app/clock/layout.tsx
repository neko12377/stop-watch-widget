'use client'
import { NavBar } from "@/app/ui/molecules"
import styles from './css/clock.module.css'
import type { INavOption } from '@/app/interfaces';
import { clockNavOptions } from "@/app/enums";
import { Label } from '@/app/ui/atoms';
import { TimerIcon, AlarmIcon, StopwatchIcon, WorldIcon } from "@/app/icon";


export default function ClockLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const navOptions: INavOption[] = [
    { id: clockNavOptions.worldClock, component: Label, path: '/clock/world-clock', icon: WorldIcon},
    { id: clockNavOptions.alarm, component: Label, path: '/clock/alarm', icon: AlarmIcon},
    { id: clockNavOptions.stopwatch, component: Label, path: '/clock/stopwatch', icon: StopwatchIcon},
    { id: clockNavOptions.timer, component: Label, path: '/clock/timer', icon: TimerIcon },
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