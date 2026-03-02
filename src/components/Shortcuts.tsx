// import { MoreHorizontal } from 'lucide-react';

const Shortcuts = () => {
  const shortcuts = [
    { name: 'Skyscanner', icon: 'S' },
    { name: 'System | Hoolva', icon: 'H' },
    { name: 'MCP Vaspian', icon: 'M' },
    { name: 'AI Assistant', icon: 'A' },
    { name: 'Spectrotel', icon: 'S' },
    { name: 'AI Assistant', icon: 'A' },
    { name: 'Spectrotel', icon: 'S' },
  ];

  return (
    // Reduced the gap slightly because the padding on the items naturally creates space
    <div className="flex justify-center flex-wrap gap-3 mb-12">
      {shortcuts.map((sc, i) => (
        <div 
          key={i} 
          // 🔥 CHANGED: Hover background, padding, and rounded corners applied to the ENTIRE wrapper
          className="relative flex flex-col items-center group cursor-pointer w-[96px] p-3 rounded-xl hover:bg-[#383841] transition-colors"
        >
          {/* 🔥 ADDED: The 3-dot context menu that only appears on wrapper hover
          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity p-0.5 rounded hover:bg-white/20 text-gray-300 hover:text-white z-10">
            <MoreHorizontal className="w-4 h-4" />
          </div> */}

          {/* Inner Icon Box - Removed the hover effect from here so it stays solid */}
          <div className="w-14 h-14 bg-[#2B2A33] rounded-xl flex items-center justify-center text-white text-xl font-bold shadow-md mb-3">
            {sc.icon}
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