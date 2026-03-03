import { useState } from "react";
// import { Input } from "./ui/input";
import { Search } from "lucide-react";

interface SearchBarProps {
  isCollapsed: boolean;
}

export default function SearchBar({ isCollapsed }: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim()) {
      const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(
        query
      )}`;
      window.open(searchUrl, "_blank", "noopener,noreferrer");
      setQuery("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

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
          <h1 className="hidden md:block text-white font-bold tracking-tight text-3xl">
            Firefox
          </h1>
        </div>
      </div>

      {/* Search Input Section */}
      <div className="relative w-[clamp(280px,35vw,650px)] mx-auto">
        
        <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
            alt="G"
            className="w-6 h-6"
          />
        </div>

        <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search with Google"
        className="
          w-full
          pl-12 pr-12
          py-3 sm:py-4 md:py-5
          bg-[#2B2A33]
          border-none
          rounded-xl
          text-sm sm:text-base md:text-lg
          text-white
          placeholder:text-gray-400
          focus-visible:ring-1 focus-visible:ring-blue-500
          shadow-2xl
          transition-all
        "
      />

        {query.trim().length > 0 && (
          <button
            onClick={handleSearch}
            className="absolute inset-y-0 right-4 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
            aria-label="Search"
          >
            <Search className="w-6 h-6" />
          </button>
        )}
      </div>
    </div>
  );
}