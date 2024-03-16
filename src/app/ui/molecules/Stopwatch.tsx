'use client'

import { useState, useEffect } from 'react';
import { timeFormatter } from '@/app/utilities/timeFormatter';
import { StartButton, StopButton, LapButton, ResetButton, LapLine } from '../atoms';
import type { ILapLine } from '@/app/interfaces';
import styles from './css/stopwatch.module.css';

function Stopwatch() {
  const [laps, setLaps] = useState<{ [K in keyof ILapLine]: number
  }[]>([]);
  const [time, setTime] = useState<number>(0);
  const [lapTime, setLapTime] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [showFirstLap, setShowFirstLap] = useState<boolean>(false);
  const [bestLap, setBestLap] = useState<number>(Number.MAX_SAFE_INTEGER);
  const [worstLap, setWorstLap] = useState<number>(0);

  const { minutes, seconds, centiseconds } = timeFormatter(time);
  const { minutes: firstLapMinutes, seconds: firstLapSeconds, centiseconds: firstLapCentiseconds } = timeFormatter(lapTime);

  useEffect(() => {
    let interval: NodeJS.Timeout | number;

    if (isActive) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
        setLapTime((time) => time + 10);
      }, 10);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isActive]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
    setShowFirstLap(true);
  };

  const handleStopResume = () => {
    setIsActive(false);
    setIsPaused(true);
  };

  const handleLap = () => {
    setBestLap((preBestLap) => {
      return lapTime < preBestLap ? lapTime : preBestLap;
    });
    setWorstLap((preWorstLap) => {
      return lapTime > preWorstLap ? lapTime : preWorstLap;
    });
    setLapTime(0);
    setLaps((preLaps) => {
      return [{ lapCount: preLaps.length + 1, time: lapTime }, ...preLaps];
    });
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
    setLapTime(0);
    setIsPaused(false);
    setLaps([]);
    setShowFirstLap(false);
    setBestLap(Number.MAX_SAFE_INTEGER);
    setWorstLap(0);
  };

  const isShowLapButton: boolean = ((): boolean => {
    return !isActive && !isPaused || isActive && !isPaused;
  })()

  return (
    <main className={styles.layout}>
      <div className={styles.timeNumber}>
        {`${minutes}:${seconds}:`}
        <div className={styles.centiseconds}>{centiseconds}</div>
      </div>
      <div className={styles.buttonGroup}>
        {/* Alternative design handle start and lap at the same side*/}
        {/* {isActive ? <StopButton handleStopResume={handleStopResume} /> : <ResetButton handleReset={handleReset} />}
        {isActive ? <LapButton handleLap={handleLap} /> : <StartButton handleStart={handleStart} />} */}
        {isShowLapButton ? <LapButton disabled={!isActive} handleLap={handleLap} /> : <ResetButton handleReset={handleReset} />}
        {isActive ? <StopButton handleStopResume={handleStopResume} /> : <StartButton handleStart={handleStart} />}
      </div>
      <div className={styles.lapGroup}>
        {showFirstLap && (
          <>
            <div className={styles.divider} />
            <LapLine lapCount={laps.length + 1} time={`${firstLapMinutes}:${firstLapSeconds}:${firstLapCentiseconds}`} />
            <div className={styles.divider} />
          </>
        )}
        {laps.length > 0 &&
          laps.map((lap) => {
            const { minutes: lapMinutes, seconds: lapSeconds, centiseconds: lapCentiseconds } = timeFormatter(lap.time);
            const lapTime = `${lapMinutes}:${lapSeconds}:${lapCentiseconds}`;
            return (
              <>
                <LapLine key={lap.lapCount} lapCount={lap.lapCount} time={lapTime} isBestLap={(lap.time <= bestLap)} isWorstLap={(lap.time >= worstLap)} />
                <div className={styles.divider} />
              </>
            );
          })
        }
      </div>
    </main>
  );
}
export { Stopwatch }
