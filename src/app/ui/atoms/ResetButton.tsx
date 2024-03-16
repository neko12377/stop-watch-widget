import type { IResetButton } from '@/app/interfaces';
import sharedStyles from './css/shared.module.css';
import styles from './css/ResetButton.module.css';

const ResetButton = (props: IResetButton) => {
  return (
    <button className={`${sharedStyles.roundedButton} ${styles.layout}`} onClick={props.handleReset}>Reset</button>
  )
}

export { ResetButton };