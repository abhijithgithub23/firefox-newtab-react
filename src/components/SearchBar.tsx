import { Search, X } from "lucide-react";

interface SearchBarProps {
  isCollapsed: boolean; 
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function SearchBar({ isCollapsed, searchQuery, setSearchQuery }: SearchBarProps) {
  
  return (
    <div
      className={`w-full relative ${
        isCollapsed
          ? "flex items-center justify-center mb-16 mt-2 min-h-[60px]"
          : "flex flex-col items-center mt-12 mb-10"
      }`}
    >
      {/* Logo Section */}
      <div
        className={`flex items-center ${
          isCollapsed ? "absolute left-0" : "justify-center mb-10"
        }`}
      >
        <div className="flex items-center shrink-0">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Firefox_logo%2C_2019.svg"
            alt="Firefox"
            className="w-14 h-14 mr-4"
          />
          <h1 
            className={`text-white font-bold tracking-tight text-3xl ${
              isCollapsed ? "max-[730px]:hidden" : ""
            }`}
          >
            Firefox
          </h1>
        </div>
      </div>

      {/* Search Input Section */}
      <div 
        className={`relative mx-auto 
          w-[clamp(280px,35vw,650px)] 
          max-[419px]:w-[200px]
          ${
          isCollapsed 
            ? "max-[499px]:ml-auto max-[499px]:mr-0" 
            : "max-[499px]:self-end"
        }`}
      >
        
        <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none text-gray-400">
          <Search className="w-5 h-5" />
        </div>

        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Filter news articles..."
          className="
            w-full
            pl-14 pr-12
            py-3 sm:py-4 md:py-5
            bg-[#2B2A33]
            border-none
            outline-none
            rounded-xl
            text-sm sm:text-base md:text-lg
            text-white
            placeholder:text-gray-400
            focus-visible:ring-1 focus-visible:ring-blue-500
            shadow-2xl
            transition-all
          "
        />

        {searchQuery.trim().length > 0 && (
          <button
            onClick={() => setSearchQuery("")}
            className="absolute inset-y-0 right-4 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
            aria-label="Clear Search"
          >
             <X className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
}