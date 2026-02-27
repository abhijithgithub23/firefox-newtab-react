import { useState } from 'react';
import SearchBar from './components/SearchBar';
import NewsFeed from './components/NewsFeed';
import CustomizePanel from './components/CustomizePanel';
import type { BackgroundSettings } from './types';

// Simple static shortcuts
const shortcuts = [
  { name: 'Skyscanner', icon: 'S' },
  { name: 'System | Hoolva', icon: 'H' },
  { name: 'MCP Vaspian', icon: 'M' },
  { name: 'AI Assistant', icon: 'A' },
  { name: 'Spectrotel', icon: 'S' },
  { name: 'AI Assistant', icon: 'A' },
  { name: 'Spectrotel', icon: 'S' },
];

function App() {
  const [bgSettings, setBgSettings] = useState<BackgroundSettings>({
    type: 'color',
    value: 'bg-[#1C1B22]' // Default dark Firefox background
  });

  const appStyle = bgSettings.type === 'image' 
    ? { backgroundImage: `url(${bgSettings.value})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }
    : {};

  return (
    <div 
      className={`min-h-screen w-full transition-all duration-500 overflow-y-auto ${bgSettings.type === 'color' ? bgSettings.value : ''}`}
      style={appStyle}
    >
      <div className="min-h-screen bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <SearchBar />
          
          {/* Shortcuts static row */}
          <div className="flex justify-center gap-6 mb-12">
            {shortcuts.map((sc, i) => (
              <div key={i} className="flex flex-col items-center gap-2 group cursor-pointer w-20">
                <div className="w-14 h-14 bg-[#2B2A33] rounded-xl flex items-center justify-center text-white text-xl font-bold group-hover:bg-[#383841] transition-colors shadow-md">
                  {sc.icon}
                </div>
                <span className="text-xs text-gray-300 text-center truncate w-full group-hover:text-white">{sc.name}</span>
              </div>
            ))}
          </div>

          <NewsFeed />
        </div>
      </div>
      
      <CustomizePanel bgSettings={bgSettings} setBgSettings={setBgSettings} />
    </div>
  );
}

export default App;