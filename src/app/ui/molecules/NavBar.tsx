'use client'

import { useState } from 'react';
import Link from 'next/link';
import type { INavBar } from '@/app/interfaces';
import styles from './css/NavBar.module.css';


const NavBar = (props: INavBar) => {
  const [selected, setSelected] = useState<string>(props.defaultValue || '');

  const handleNavigation = (option: string) => {
    setSelected(option);
  }

  return (
    <nav className={styles.layout}>
      {
        props.options.map((option) => {
          let className = styles.iconLabel;
          if (option.id === selected) {
            className += ` ${styles.iconLabelActive}`;
          }
      
          return (
            <Link onClick={() => {
              handleNavigation(option.id);
            }} href={option.path} key={option.id}>
              <option.component label={option.id} className={className} icon={option.icon}iconStyle={styles.icon} labelStyle={styles.label} />
            </Link>
          )
        })
      }
    </nav>
  );
}

export { NavBar };
