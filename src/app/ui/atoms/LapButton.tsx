import type { ILapButton } from '@/app/interfaces';
import sharedStyles from './css/shared.module.css';
import styles from './css/LapButton.module.css';

const LapButton = (props: ILapButton) => {
  return (
    <button disabled={props.disabled} className={`${sharedStyles.roundedButton} ${styles.layout}`} onClick={props.handleLap}>Lap</button>
  )
}

export { LapButton };