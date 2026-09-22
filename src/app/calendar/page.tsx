import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calendar | Mount Shasta Union School District",
  description: "Mount Shasta Union School District Calendar",
};

export default function Calendar() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-5">
      <div className="flex flex-col items-center gap-8 text-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#8b1a2e] flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-base">M</span>
          </div>
          <span className="text-xl font-semibold text-gray-900 tracking-tight">
            Mount Shasta Union School District
          </span>
        </div>

        <a
          href="https://www.mountshastausd.com/msusd-calendar-2026-2027"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 bg-[#8b1a2e] hover:bg-[#6e1424] text-white font-semibold text-base rounded-md transition-colors duration-200 tracking-wide"
        >
          See Calendar
        </a>
      </div>
    </div>
  );
}
