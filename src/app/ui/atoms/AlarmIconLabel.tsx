import { AlarmIcon } from "@/app/icon";
import { IIconLabel } from "@/app/interfaces";

const AlarmIconLabel = (props: IIconLabel) => {
  return (
    <div className={props.className}>
      <AlarmIcon className={props.iconStyle}/>
      <span className={props.labelStyle}>Alarms</span>
    </div>
  );
}

export { AlarmIconLabel };