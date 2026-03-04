import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import NewsFeed from './components/NewsFeed';
import CustomizePanel from './components/CustomizePanel';
import Shortcuts from './components/Shortcuts';
import type { BackgroundSettings } from './types';

function App() { 
  const [bgSettings, setBgSettings] = useState<BackgroundSettings>(() => {
    const saved = localStorage.getItem('firefox-bg-settings');
    return saved ? JSON.parse(saved) : { type: 'color', value: 'bg-[#1C1B22]' };
  });

  const [showShortcuts, setShowShortcuts] = useState<boolean>(() => {
    const saved = localStorage.getItem('firefox-show-shortcuts');
    return saved !== null ? JSON.parse(saved) : true;
  });

  const [showNews, setShowNews] = useState<boolean>(() => {
    const saved = localStorage.getItem('firefox-show-news');
    return saved !== null ? JSON.parse(saved) : true;
  });

  // Lifted search state
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    localStorage.setItem('firefox-bg-settings', JSON.stringify(bgSettings));
  }, [bgSettings]);

  useEffect(() => {
    localStorage.setItem('firefox-show-shortcuts', JSON.stringify(showShortcuts));
  }, [showShortcuts]);

  useEffect(() => {
    localStorage.setItem('firefox-show-news', JSON.stringify(showNews));
  }, [showNews]);

  const isCollapsed = showShortcuts && showNews;

  const appStyle =
    bgSettings.type === 'image'
      ? {
          backgroundImage: `url(${bgSettings.value})`,
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
        }
      : {};

  return (
    <div
      className={`min-h-screen w-full ${
        bgSettings.type === 'color' ? bgSettings.value : ''
      }`}
      style={appStyle}
    >
      <div className="min-h-screen bg-black/20">
        <div className="w-full px-8 md:px-12 py-8 transition-all duration-700">
          
          <SearchBar 
            isCollapsed={isCollapsed} 
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery} 
          />

          <div className="max-w-6xl mx-auto transition-all duration-700">
            {showShortcuts && <Shortcuts />}

            {showNews && <NewsFeed searchQuery={searchQuery} />}
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