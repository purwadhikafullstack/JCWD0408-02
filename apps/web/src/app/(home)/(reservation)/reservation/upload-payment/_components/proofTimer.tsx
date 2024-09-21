"use client";
import { useEffect, useState } from "react";

export default function TimerComp() {
  const [time, setTime] = useState<number>(3600);

  useEffect(() => {
    if (time > 0) {
      const timer = setInterval(() => {
        setTime(time - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [time]);

  const hour = Math.floor(time / 3600);
  const second = time % 60;
  const minutes: number = Math.floor(time / 60 / (hour + 1));
  return (
    <div>
      {time > 0 ? (
        <p className="font-bold text-hitam">
          Waktu Verifikasi :{" "}
          <span className="text-btn">
            {minutes} menit :{ second < 10 ? ` 0${second}` :` ${second}`} detik
          </span>
        </p>
      ) : (
        <p className="text-sm font-bold text-hitam">
          Waktu Verifikasi <span className="text-red-700">Habis</span>
        </p>
      )}
    </div>
  );
}
