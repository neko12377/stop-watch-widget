import type { IStopButton } from '@/app/interfaces';
import sharedStyles from './css/shared.module.css'
import styles from './css/StopButton.module.css'

const StopButton = (props: IStopButton) => {

  return (
    <button className={`${sharedStyles.roundedButton} ${styles.layout}`} onClick={props.handleStopResume}>Stop</button>
  );
}

export { StopButton };