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
        <div className="container mx-auto px-4 py-8">
          <SearchBar />

          {showShortcuts && <Shortcuts />}

          {showNews && <NewsFeed />}
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