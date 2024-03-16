import type { IStartButton } from '@/app/interfaces';
import sharedStyles from './css/shared.module.css';
import styles from './css/StartButton.module.css';

const StartButton = (props: IStartButton) => {

  return (
    <button className={`${sharedStyles.roundedButton} ${styles.layout}`} onClick={props.handleStart}>Start</button>
  );
}

export { StartButton };