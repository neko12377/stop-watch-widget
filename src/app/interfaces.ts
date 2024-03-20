interface IButton {
  label?: string;
  className?: string;
  handleAction?: () => void;
}

interface ILapLine {
  lapCount: number;
  time: string;
  isBestLap?: boolean;
  isWorstLap?: boolean;
}

interface ReactIconProps {
  className?: string;
}

interface IIconLabel {
  label: string;
  className?: string;
  iconStyle?: string;
  labelStyle?: string;
  isActive?: boolean;
  isDisabled?: boolean;
  icon?: React.FC<ReactIconProps>;
}


interface INavOption {
  id: string;
  component: React.FC<IIconLabel>;
  path: string;
  icon?: React.FC<ReactIconProps>;
}

interface INavBar {
  defaultValue?: string;
  options: INavOption[]
}

export type { ILapLine, IIconLabel, INavBar, IButton, INavOption }

