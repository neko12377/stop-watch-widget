import { StopwatchIcon } from "@/app/icon";
import { IIconLabel } from "@/app/interfaces";

const StopwatchIconLabel = (props: IIconLabel) => {
  return (
    <div className={props.className}>
      <StopwatchIcon className={props.iconStyle}/>
      <span className={props.labelStyle}>Stopwatch</span>
    </div>
  );
}

export { StopwatchIconLabel };