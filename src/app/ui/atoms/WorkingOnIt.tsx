import { PalmIcon } from "@/app/icon";
import styles from "./css/WorkingOnIt.module.css";

const WorkingOnIt = () => {
  return (
    <div className={styles.layout}>
      <PalmIcon className={styles.icon} />
      <h1 className={styles.title}>Working on it...</h1>
    </div>
  );
};

export { WorkingOnIt }