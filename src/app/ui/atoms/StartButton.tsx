import type { IStartButton } from '../../interfaces';
import styles from './css/shared.module.css';
import startButtonStyles from './css/StartButton.module.css';

const StartButton = (props: IStartButton) => {

  return (
    <button className={`${styles.roundedButton} ${startButtonStyles.layout}`} onClick={props.handleStart}>Start</button>
  );
}

export { StartButton };