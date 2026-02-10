import React from 'react';
import WheelPicker from './components/WheelPicker';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800 font-sans">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Date Picker</h1>
        <p className="text-gray-500">Physics-based scrolling interaction</p>
      </header>
      
      <main className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center justify-center">
        <WheelPicker />
      </main>

      <footer className="mt-12 text-gray-400 text-sm">
        Built with React, TypeScript & Tailwind
      </footer>
    </div>
  );
};

export default App;