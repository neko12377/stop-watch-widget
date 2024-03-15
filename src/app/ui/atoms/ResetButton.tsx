import type { IResetButton } from '../../interfaces';
import styles from './css/shared.module.css';
import resetButtonStyles from './css/ResetButton.module.css';

const ResetButton = (props: IResetButton) => {
  return (
    <button className={`${styles.roundedButton} ${resetButtonStyles.layout}`} onClick={props.handleReset}>Reset</button>
  )
}

export { ResetButton };