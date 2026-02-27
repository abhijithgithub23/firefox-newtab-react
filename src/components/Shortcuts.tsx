
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
  )
}

export default Shortcuts