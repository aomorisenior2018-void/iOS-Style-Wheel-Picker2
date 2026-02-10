import React, { useState } from 'react';
import Wheel from './Wheel';

const WheelPicker: React.FC = () => {
  const now = new Date();
  const [selectedYear, setSelectedYear] = useState(now.getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(now.getMonth() + 1);
  const [selectedDay, setSelectedDay] = useState(now.getDate());

  // Generate arrays for the picker
  // Center roughly around current year, e.g., 1950 - 2050
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => currentYear - 50 + i);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  // Formatter functions to integrate unit into the text
  const formatYear = (val: number) => `${val}年`;
  const formatMonth = (val: number) => `${val}月`;
  const formatDay = (val: number) => `${val}日`;

  const formatDate = () => {
    const y = selectedYear;
    const m = selectedMonth.toString().padStart(2, '0');
    const d = selectedDay.toString().padStart(2, '0');
    return `${y}年 ${m}月 ${d}日`;
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="mb-10 text-xl font-bold text-gray-800">
        {formatDate()}
      </div>

      <div className="flex justify-center items-center w-full max-w-sm">
        {/* Year */}
        <div className="flex-1 flex justify-center">
            <Wheel 
            items={years} 
            selected={selectedYear} 
            onSelect={setSelectedYear} 
            formatItem={formatYear}
            />
        </div>
        
        {/* Month */}
        <div className="flex-1 flex justify-center">
            <Wheel 
            items={months} 
            selected={selectedMonth} 
            onSelect={setSelectedMonth} 
            formatItem={formatMonth}
            />
        </div>

        {/* Day */}
        <div className="flex-1 flex justify-center">
            <Wheel 
            items={days} 
            selected={selectedDay} 
            onSelect={setSelectedDay} 
            formatItem={formatDay}
            />
        </div>
      </div>
      
      <div className="mt-10">
        <button 
          className="px-12 py-3 bg-blue-500 hover:bg-blue-600 text-white text-lg rounded-xl shadow-md transition-all active:scale-95"
          onClick={() => alert(`Selected: ${formatDate()}`)}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default WheelPicker;