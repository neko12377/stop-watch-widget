import { WorldIcon } from "@/app/icon";
import { IIconLabel } from "@/app/interfaces";

const WorldClockIconLabel = (props: IIconLabel) => {
  return (
    <div className={props.className}>
      <WorldIcon className={props.iconStyle}/>
      <span className={props.labelStyle}>World Clock</span>
    </div>
  );
}

export { WorldClockIconLabel };