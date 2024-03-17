'use client'

import { useState } from 'react';
import Link from 'next/link';
import { clockNavOptions } from '@/app/enums';
import type { INavBar } from '@/app/interfaces';
import styles from './css/NavBar.module.css';


const NavBar = (props: INavBar) => {
  const [selected, setSelected] = useState<string>(props.defaultValue || '');

  const handleNavigation = (option: string) => {
    setSelected(option);
  }

  // temporary feature
  const unImplementedFeature: string[] = [clockNavOptions.worldClock, clockNavOptions.alarm, clockNavOptions.timer];

  return (
    <nav className={styles.layout}>
      {
        props.options.map((option) => {
          let className = styles.iconLabel;
          if (option.id === selected) {
            className += ` ${styles.iconLabelActive}`;
          }
          if (unImplementedFeature.includes(option.id)) {
            className += ` ${styles.iconLabelDisabled}`;
          }
          return (
            <Link onClick={() => handleNavigation} href={option.path} key={option.id}>
              <option.component className={className} iconStyle={styles.icon} labelStyle={styles.label} />
            </Link>
          )
        })
      }
    </nav>
  );
}

export { NavBar };
