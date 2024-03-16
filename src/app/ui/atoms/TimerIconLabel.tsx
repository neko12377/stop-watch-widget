import { TimerIcon } from "@/app/icon";
import { IIconLabel } from "@/app/interfaces";

const TimerIconLabel = (props: IIconLabel) => {
  return (
    <div className={props.className}>
      <TimerIcon className={props.iconStyle}/>
      <span className={props.labelStyle}>Timers</span>
    </div>
  );
}

export { TimerIconLabel };