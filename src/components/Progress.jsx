"use client";
import sad from "../assets/30.png";
import hopeful from "../assets/60.png";
import happy from "../assets/90.png";
import overjoyed from "../assets/100.png";

export default function DailyProgress({ habits }) {
  const total = habits.length;
  const completed = habits.filter((h) => h.completed).length;
  const progress = total === 0 ? 0 : (completed / total) * 100;

  const getDogImage = (progress) => {
    if (progress < 30) return sad;
    if (progress < 60) return hopeful;
    if (progress < 90) return happy;
    return overjoyed;
  };

  const dogImage = getDogImage(progress);

  const getGradient = (progress) => {
    if (progress <= 50) {
      // Red → Yellow
      const ratio = progress / 50; // 0 → 1
      const r = 255;
      const g = Math.round(0 + ratio * 255);
      const b = 0;
      const color = `rgb(${r},${g},${b})`;
      return `linear-gradient(to right, red, ${color})`;
    } else {
      // Yellow → Green
      const ratio = (progress - 50) / 50; // 0 → 1
      const r = Math.round(255 - ratio * 255);
      const g = 255;
      const b = 0;
      const color = `rgb(${r},${g},${b})`;
      return `linear-gradient(to right, yellow, ${color})`;
    }
  };

  const gradient = getGradient(progress);

  return (
    <div className="my-4 bg-[#f3f0ec] rounded-2xl p-12">
      <div className="relative w-32 h-32 mb-4 mx-auto">
        <img
          src={dogImage}
          alt="Mood Dog"
          className="object-contain w-full h-full transition-transform duration-300"
          style={{
            transform: `scale(${1 + progress / 400})`,
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
