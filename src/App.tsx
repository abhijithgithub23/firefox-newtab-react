import { useState } from 'react';
import SearchBar from './components/SearchBar';
import NewsFeed from './components/NewsFeed';
import CustomizePanel from './components/CustomizePanel';
import Shortcuts from './components/Shortcuts';
import type { BackgroundSettings } from './types';

function App() {
  const [bgSettings, setBgSettings] = useState<BackgroundSettings>({
    type: 'color',
    value: 'bg-[#1C1B22]'
  });

  const [showShortcuts, setShowShortcuts] = useState(true);
  const [showNews, setShowNews] = useState(true);

  // Layout shifts if BOTH are ON
  const isCollapsed = showShortcuts && showNews;

  const appStyle =
    bgSettings.type === 'image'
      ? {
          backgroundImage: `url(${bgSettings.value})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }
      : {};

  return (
    <div
      className={`min-h-screen w-full transition-all duration-500 overflow-y-auto ${
        bgSettings.type === 'color' ? bgSettings.value : ''
      }`}
      style={appStyle}
    >
      <div className="min-h-screen bg-black/20 backdrop-blur-sm">
        {/* We use px-12 to keep the logo slightly away from the absolute edge */}
        <div className="w-full px-8 md:px-12 py-8 transition-all duration-700">
          
          <SearchBar isCollapsed={isCollapsed} />

          {/* This wrapper keeps the grid content centered while the header is wide */}
          <div className="max-w-6xl mx-auto transition-all duration-700">
            {showShortcuts && <Shortcuts />}
            {showNews && <NewsFeed />}
          </div>
        </div>
      </div>

      <CustomizePanel
        bgSettings={bgSettings}
        setBgSettings={setBgSettings}
        showShortcuts={showShortcuts}
        setShowShortcuts={setShowShortcuts}
        showNews={showNews}
        setShowNews={setShowNews}
      />
    </div>
  );
}

export default App;