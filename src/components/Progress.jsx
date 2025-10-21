"use client";
import sad from "../assets/30.png";
import hopeful from "../assets/60.png";
import happy from "../assets/90.png";
import overjoyed from "../assets/100.png";
import { motion } from "framer-motion";

export default function DailyProgress({ habits, progress }) {
  const getDogImage = (progress) => {
    if (progress < 30) return sad;
    if (progress < 60) return hopeful;
    if (progress < 90) return happy;
    return overjoyed;
  };

  const dogImage = getDogImage(progress);

  const getGradient = (progress) => {
    if (progress <= 50) {
      const ratio = progress / 50;
      const r = 255;
      const g = Math.round(0 + ratio * 255);
      const b = 0;
      const color = `rgb(${r},${g},${b})`;
      return `linear-gradient(to right, red, ${color})`;
    } else {
      const ratio = (progress - 50) / 50;
      const r = Math.round(255 - ratio * 255);
      const g = 255;
      const b = 0;
      const color = `rgb(${r},${g},${b})`;
      return `linear-gradient(to right, yellow, ${color})`;
    }
  };

  const gradient = getGradient(progress);
  const happyScale = 1 + 0.15 * (progress / 100);

  return (
    <div className="my-4 bg-[#f3f0ec] rounded-2xl p-6 md:p-12">
      <div className="relative w-32 h-32 mb-4 mx-auto">
        <motion.img
          src={dogImage}
          alt="Mood Dog"
          className="object-contain w-full h-full"
          animate={{
            y: [0, -20, -20, 0],
            scale: [1, happyScale, happyScale, 1],
          }}
          transition={{
            duration: 4,
            times: [0, 0.25, 0.75, 1],
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700">
          Daily Progress
        </span>
        <span className="text-sm font-medium text-gray-700">
          {Math.round(progress)}%
        </span>
      </div>

      <div className="h-4 w-full rounded-full bg-gray-300 overflow-hidden">
        <div
          className="h-full transition-all duration-300"
          style={{
            width: `${progress}%`,
            background: gradient,
          }}
        />
      </div>
    </div>
  );
}
