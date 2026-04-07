import React, { useEffect, useRef } from 'react';
import { formatTime } from '../lib/utils';

type CountdownTimerProps = {
  seconds: number;
  warnThreshold?: number;
  label?: string;
  className?: string;
  size?: 'md' | 'lg';
  onExpire?: () => void;
};

const CountdownTimer = ({
  seconds,
  warnThreshold = 300,
  label = 'Sisa Waktu',
  className = '',
  size = 'md',
  onExpire
}: CountdownTimerProps) => {
  const previousSeconds = useRef(seconds);

  useEffect(() => {
    if (seconds === 0 && previousSeconds.current > 0) {
      onExpire?.();
    }
    previousSeconds.current = seconds;
  }, [seconds, onExpire]);

  const isWarning = seconds <= warnThreshold;
  const variantClass =
    size === 'lg'
      ? 'text-2xl sm:text-3xl tracking-wider'
      : 'text-lg sm:text-2xl tracking-wider';

  const wrapperClass = [
    'bg-blue-800',
    'flex',
    'items-center',
    'px-3',
    'sm:px-5',
    'py-2',
    'shadow-inner',
    'rounded-full',
    className
  ]
    .filter(Boolean)
    .join(' ');
  const timerTextClass = [
    'font-black',
    'font-mono',
    variantClass,
    isWarning ? 'text-red-400 animate-pulse' : 'text-white'
  ].join(' ');

  return (
    <div className={wrapperClass}>
      <div className="text-xs sm:text-sm text-blue-200 uppercase font-bold mr-2">{label}</div>
      <div className={timerTextClass}>{formatTime(seconds)}</div>
    </div>
  );
};

export default CountdownTimer;
