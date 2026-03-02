const Shortcuts = () => {
  // 🔥 CHANGED: Replaced the single letters with SVG URL links
  const shortcuts = [
    { name: 'Google', icon: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg' },
    { name: 'GitHub', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg' },
    { name: 'Wikipedia', icon: 'https://upload.wikimedia.org/wikipedia/en/8/80/Wikipedia-logo-v2.svg' },
    { name: 'AI Assistant', icon: 'A' }, 
    { name: 'Spectrotel', icon: 'S' },
  ];

  return (
    <div className="flex justify-center flex-wrap gap-3 mb-12">
      {shortcuts.map((sc, i) => (
        <div 
          key={i} 
          className="relative flex flex-col items-center group cursor-pointer w-[96px] p-3 rounded-xl hover:bg-[#383841] transition-colors"
        >
          {/* Inner Icon Box */}
          <div className="w-14 h-14 bg-[#2B2A33] rounded-xl flex items-center justify-center text-white text-xl font-bold shadow-md mb-3 overflow-hidden">
            
            {/* 🔥 CHANGED: Check if the string is a URL (starts with http) to render an image, otherwise render the letter */}
            {sc.icon.startsWith('http') ? (
              <img 
                src={sc.icon} 
                alt={sc.name} 
                className="w-8 h-8 object-contain" // w-8 h-8 keeps the icon nicely sized inside the 14x14 box
              />
            ) : (
              <span>{sc.icon}</span>
            )}

          </div>
          
          <span className="text-xs text-gray-300 text-center truncate w-full group-hover:text-white">
            {sc.name}
          </span>
        </div>
      ))}
    </div>
  )
}

export default Shortcuts;