import { clockNavOptions } from "./enums";

interface IStartButton {
  handleStart: () => void
}

interface IStopButton {
  handleStopResume: () => void
}

interface IResetButton {
  handleReset: () => void
}

interface ILapButton {
  disabled: boolean;
  handleLap: () => void
}

interface ILapLine {
  lapCount: number;
  time: string;
  isBestLap?: boolean;
  isWorstLap?: boolean;
}

interface IIconLabel {
  className?: string;
  iconStyle?: string;
  labelStyle?: string;
  isActive?: boolean;
  isDisabled?: boolean;
}

interface INavBar {
  defaultValue?: string;
  options: {id: string, component: React.FC<IIconLabel>, path: string}[]
}

export type { IStartButton, IStopButton, IResetButton, ILapButton, ILapLine, IIconLabel, INavBar }

