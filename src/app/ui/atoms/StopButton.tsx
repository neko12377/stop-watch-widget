import type { IStopButton } from '../../interfaces';
import styles from './css/shared.module.css'
import stopButtonStyles from './css/StopButton.module.css'

const StopButton = (props: IStopButton) => {

  return (
    <button className={`${styles.roundedButton} ${stopButtonStyles.layout}`} onClick={props.handleStopResume}>Stop</button>
  );
}

export { StopButton };