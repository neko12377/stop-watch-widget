'use client'

import { useState, useEffect } from 'react';
import { timeFormatter } from '@/app/utilities/timeFormatter';
import { Button, LapLine } from '../atoms';
import type { ILapLine } from '@/app/interfaces';
import styles from './css/stopwatch.module.css';

function Stopwatch() {
  const [laps, setLaps] = useState<{ [K in keyof ILapLine]: number
  }[]>([]);
  const [time, setTime] = useState<number>(0);
  const [lapTime, setLapTime] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [lapseTimeWhenPaused, setLapseTimeWhenPaused] = useState<number>(0);
  const [lapLapseTimeWhenPaused, setLapLapseTimeWhenPaused] = useState<number>(0);
  const [showFirstLap, setShowFirstLap] = useState<boolean>(false);
  const [bestLap, setBestLap] = useState<number>(Number.MAX_SAFE_INTEGER);
  const [worstLap, setWorstLap] = useState<number>(0);

  const { minutes, seconds, centiseconds } = timeFormatter(time);
  const { minutes: firstLapMinutes, seconds: firstLapSeconds, centiseconds: firstLapCentiseconds } = timeFormatter(lapTime);

  useEffect(() => {
    let interval: NodeJS.Timeout | number;
    if (isActive) {
      interval = setInterval(() => {
        setTime(() => {
          const timeLapsed = sessionStorage.getItem('startTime') ? Date.now() - parseInt(sessionStorage.getItem('startTime') || '0') : 0;
          const newTime = lapseTimeWhenPaused + timeLapsed;
          return newTime;
        });
        setLapTime(() => {
          const lapTimeLapsed = sessionStorage.getItem('lapStartTime') ? Date.now() - parseInt(sessionStorage.getItem('lapStartTime') || '0') : 0;
          const newLapTime = lapLapseTimeWhenPaused + lapTimeLapsed;
          return newLapTime;
        });
      }, 10);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isActive, lapseTimeWhenPaused, lapLapseTimeWhenPaused]);

  const handleStart = () => {
    sessionStorage.setItem('lapStartTime', Date.now().toString());
    sessionStorage.setItem('startTime', Date.now().toString());
    setIsActive(true);
    setIsPaused(false);
    setShowFirstLap(true);
  };

  const handleStop = () => {
    setLapseTimeWhenPaused(time);
    setLapLapseTimeWhenPaused(lapTime);
    setIsActive(false);
    setIsPaused(true);
  };

  const handleLap = () => {
    setLapLapseTimeWhenPaused(0);
    setLapTime(0);
    sessionStorage.setItem('lapStartTime', Date.now().toString());
    setBestLap((preBestLap) => {
      return lapTime < preBestLap ? lapTime : preBestLap;
    });
    setWorstLap((preWorstLap) => {
      return lapTime > preWorstLap ? lapTime : preWorstLap;
    });
    setLaps((preLaps) => {
      return [{ lapCount: preLaps.length + 1, time: lapTime }, ...preLaps];
    });
  };

  const handleReset = () => {
    sessionStorage.removeItem('startTime');
    sessionStorage.removeItem('lapStartTime');
    setIsActive(false);
    setTime(0);
    setLapTime(0);
    setIsPaused(false);
    setLaps([]);
    setShowFirstLap(false);
    setBestLap(Number.MAX_SAFE_INTEGER);
    setWorstLap(0);
    setLapseTimeWhenPaused(0);
    setLapLapseTimeWhenPaused(0);
  };

  const isShowLapButton: boolean = ((): boolean => {
    return !isActive && !isPaused || isActive && !isPaused;
  })()

  const buttons = {
    startButton: <Button className={`${styles.roundedButton} ${styles.startButton}`} label='Start' handleAction={handleStart} />,
    stopButton: <Button className={`${styles.roundedButton} ${styles.stopButton}`} label='Stop' handleAction={handleStop} />,
    LapButton: <Button className={`${styles.roundedButton} ${styles.lapButton}`} label='Lap' handleAction={handleLap} />,
    ResetButton: <Button className={`${styles.roundedButton} ${styles.resetButton}`} label='Reset' handleAction={handleReset} />
  }

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
        {isShowLapButton ? buttons.LapButton : buttons.ResetButton}
        {isActive ? buttons.stopButton : buttons.startButton }
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
