import { IButton } from "@/app/interfaces";

const Button = (props: IButton) => {
  const { label = ' ', handleAction = (() => {}), className = '' } = props;
  return (
    <button className={className} onClick={props.handleAction}>{props.label}</button>
  );
}

export { Button }