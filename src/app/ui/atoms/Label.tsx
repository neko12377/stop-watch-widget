import { IIconLabel } from "@/app/interfaces";

const Label = (props: IIconLabel) => {
  const { className, iconStyle, labelStyle, isActive, isDisabled, label } = props;
  return (
    <div className={className}>
      {props.icon && <props.icon className={iconStyle} />}
      <span className={labelStyle}>{label}</span>
    </div>
  );
}

export { Label };