import type { ILapButton } from '../../interfaces';
import styles from './css/shared.module.css';
import lapButtonStyles from './css/LapButton.module.css';

const LapButton = (props: ILapButton) => {
  return (
    <button disabled={props.disabled} className={`${styles.roundedButton} ${lapButtonStyles.layout}`} onClick={props.handleLap}>Lap</button>
  )
}

export { LapButton };