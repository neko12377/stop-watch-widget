import type { ILapLine } from '@/app/interfaces';
import styles from './css/lapLine.module.css';

const LapLine = (props: ILapLine) => {
  let textColour;
  if (props.isBestLap) {
    textColour = styles.bestLap;
  } else if (props.isWorstLap) {
    textColour = styles.worstLap;
  } else {
    textColour = '';
  }

  return (
    <div className={`${styles.layout} ${textColour}`}>
      <p>
        <span className={styles.smallerText}>
          Lap 
        </span>
        {props.lapCount}
      </p>
      <p>{props.time}</p>
    </div>
  )
}

export { LapLine };