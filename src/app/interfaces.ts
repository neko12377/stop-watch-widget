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

export type { IStartButton, IStopButton, IResetButton, ILapButton, ILapLine }

