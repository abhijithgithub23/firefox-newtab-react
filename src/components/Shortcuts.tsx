import { useState, useEffect, useRef } from 'react';
import { MoreHorizontal, Plus, Edit2, Trash2, X } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';


// Define the shape of our Shortcut object
interface Shortcut {
  id: string;
  name: string;
  url: string;
  icon: string;
}

const Shortcuts = () => {
  // 1. State for shortcuts, loaded from Local Storage if available
  const [shortcuts, setShortcuts] = useState<Shortcut[]>(() => {
    const saved = localStorage.getItem('firefox-shortcuts');
    if (saved) return JSON.parse(saved);
    return [
      { id: '1', name: 'Google', url: 'https://google.com', icon: 'https://www.google.com/s2/favicons?domain=google.com&sz=128' },
      { id: '2', name: 'GitHub', url: 'https://github.com', icon: 'https://www.google.com/s2/favicons?domain=github.com&sz=128' },
      { id: '3', name: 'Wikipedia', url: 'https://wikipedia.org', icon: 'https://www.google.com/s2/favicons?domain=wikipedia.org&sz=128' },
    ];
  });

  // 2. UI State
  const [activeMenuId, setActiveMenuId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', url: '' });

  const menuRef = useRef<HTMLDivElement>(null);

  // Save to Local Storage whenever shortcuts change
  useEffect(() => {
    localStorage.setItem('firefox-shortcuts', JSON.stringify(shortcuts));
  }, [shortcuts]);

  // Close the 3-dot menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setActiveMenuId(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Helper function to format the URL and get the Google Favicon
  const getFaviconUrl = (url: string) => {
    try {
      // Ensure the URL has a protocol
      const fullUrl = url.startsWith('http') ? url : `https://${url}`;
      const domain = new URL(fullUrl).hostname;
      return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
    } catch {
      return ''; // Fallback if URL is invalid
    }
  };

  const ensureProtocol = (url: string) => url.startsWith('http') ? url : `https://${url}`;

  // Handle Form Submission (Add or Edit)
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.url) return;

    const finalUrl = ensureProtocol(formData.url);
    const iconUrl = getFaviconUrl(finalUrl);

    if (editingId) {
      // Edit existing
      setShortcuts(shortcuts.map(sc => 
        sc.id === editingId ? { ...sc, name: formData.name, url: finalUrl, icon: iconUrl } : sc
      ));
    } else {
      // Add new
      const newShortcut: Shortcut = {
        id: uuidv4(),
        name: formData.name,
        url: finalUrl,
        icon: iconUrl,
      };
      setShortcuts([...shortcuts, newShortcut]);
    }

    closeModal();
  };

  const handleDelete = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShortcuts(shortcuts.filter(sc => sc.id !== id));
    setActiveMenuId(null);
  };

  const openAddModal = () => {
    setFormData({ name: '', url: '' });
    setEditingId(null);
    setIsModalOpen(true);
  };

  const openEditModal = (sc: Shortcut, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setFormData({ name: sc.name, url: sc.url });
    setEditingId(sc.id);
    setActiveMenuId(null);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({ name: '', url: '' });
    setEditingId(null);
  };

  const handleMenuToggle = (id: string, e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigating to the link
    e.stopPropagation();
    setActiveMenuId(activeMenuId === id ? null : id);
  };

  return (
    <div className="flex justify-center flex-wrap gap-3 mb-12">
      {/* 1. Map Over Existing Shortcuts */}
      {shortcuts.map((sc) => (
        <a 
          key={sc.id} 
          href={sc.url}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex flex-col items-center group cursor-pointer w-[96px] p-3 rounded-xl hover:bg-[#383841] transition-colors"
        >
          {/* 3-Dot Context Menu Button */}
          <button 
            onClick={(e) => handleMenuToggle(sc.id, e)}
            className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity p-0.5 rounded hover:bg-white/20 text-gray-300 hover:text-white z-10"
          >
            <MoreHorizontal className="w-4 h-4" />
          </button>

          {/* Dropdown Menu (Edit/Delete) */}
          {activeMenuId === sc.id && (
            <div 
              ref={menuRef}
              className="absolute top-8 right-2 w-32 bg-[#2B2A33] border border-gray-700 rounded-lg shadow-xl z-20 py-1"
              onClick={(e) => e.preventDefault()} // Keep click inside dropdown from opening the link
            >
              <button 
                onClick={(e) => openEditModal(sc, e)}
                className="w-full text-left px-3 py-2 text-sm text-gray-200 hover:bg-[#383841] flex items-center"
              >
                <Edit2 className="w-3 h-3 mr-2" /> Edit
              </button>
              <button 
                onClick={(e) => handleDelete(sc.id, e)}
                className="w-full text-left px-3 py-2 text-sm text-red-400 hover:bg-[#383841] flex items-center"
              >
                <Trash2 className="w-3 h-3 mr-2" /> Delete
              </button>
            </div>
          )}

          {/* Inner Icon Box */}
          <div className="w-14 h-14 bg-[#2B2A33] rounded-xl flex items-center justify-center text-white text-xl font-bold shadow-md mb-3 overflow-hidden">
            {sc.icon ? (
              <img src={sc.icon} alt={sc.name} className="w-8 h-8 object-contain" />
            ) : (
              <span>{sc.name.charAt(0).toUpperCase()}</span>
            )}
          </div>
          
          <span className="text-xs text-gray-300 text-center truncate w-full group-hover:text-white">
            {sc.name}
          </span>
        </a>
      ))}

      {/* 2. ADD SHORTCUT BUTTON */}
      <div 
        onClick={openAddModal}
        className="relative flex flex-col items-center group cursor-pointer w-[96px] p-3 rounded-xl hover:bg-[#383841] transition-colors"
      >
        <div className="w-14 h-14 bg-[#2B2A33] rounded-xl flex items-center justify-center text-gray-400 group-hover:text-white shadow-md mb-3">
          <Plus className="w-6 h-6" />
        </div>
        <span className="text-xs text-gray-300 text-center truncate w-full group-hover:text-white">
          Add shortcut
        </span>
      </div>

      {/* 3. ADD/EDIT MODAL OVERLAY */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-[#1C1B22] border border-gray-800 rounded-xl shadow-2xl w-full max-w-md p-6 relative">
            
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-white text-xl font-semibold">
                {editingId ? 'Edit shortcut' : 'Add shortcut'}
              </h2>
              <button onClick={closeModal} className="text-gray-400 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form Input */}
            <form onSubmit={handleSave} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1">Name</label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. YouTube"
                  className="w-full bg-[#2B2A33] text-white border-none rounded-md px-4 py-2 focus:ring-1 focus:ring-blue-500 outline-none"
                  autoFocus
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1">URL</label>
                <input 
                  type="text" 
                  value={formData.url}
                  onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                  placeholder="e.g. youtube.com"
                  className="w-full bg-[#2B2A33] text-white border-none rounded-md px-4 py-2 focus:ring-1 focus:ring-blue-500 outline-none"
                  required
                />
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end gap-3 mt-8">
                <button 
                  type="button" 
                  onClick={closeModal}
                  className="px-4 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-[#2B2A33] transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="px-4 py-2 rounded-md text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors disabled:opacity-50"
                  disabled={!formData.name || !formData.url}
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Shortcuts;