'use client'

import { useState } from 'react';
import { clockNavOptions } from '@/app/enums';
import type { IIconLabel } from '@/app/interfaces';
import styles from './css/NavBar.module.css';
import { StopwatchIconLabel, WorldClockIconLabel, AlarmIconLabel, TimerIconLabel } from '@/app/ui/atoms';

const NavBar = () => {
  const [selected, setSelected] = useState<clockNavOptions>(clockNavOptions.stopwatch);
  const navOptions: { id: clockNavOptions, component: React.FC<IIconLabel> }[] = [
    { id: clockNavOptions.worldClock, component: WorldClockIconLabel },
    { id: clockNavOptions.alarm, component: AlarmIconLabel },
    { id: clockNavOptions.stopwatch, component: StopwatchIconLabel },
    { id: clockNavOptions.time, component: TimerIconLabel },
  ];

  // temporary feature
  const unImplementedFeature: clockNavOptions[] = [clockNavOptions.worldClock, clockNavOptions.alarm, clockNavOptions.time];

  return (
    <nav className={styles.layout}>
      {
        navOptions.map((option) => {
          let className = styles.iconLabel;
          if (option.id === selected) {
            className += ` ${styles.iconLabelActive}`;
          }
          if (unImplementedFeature.includes(option.id)) {
            className += ` ${styles.iconLabelDisabled}`;
          }
          return (<option.component key={option.id} className={className} iconStyle={styles.icon} labelStyle={styles.label} />)
        })
      }
    </nav>
  );
}

export { NavBar };
