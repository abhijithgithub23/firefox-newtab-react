import { Input } from './ui/input';

interface SearchBarProps {
  isCollapsed: boolean;
}

export default function SearchBar({ isCollapsed }: SearchBarProps) {
  return (
    <div 
      className={`w-full relative ${
        isCollapsed 
          ? "flex items-center justify-center mb-16 mt-2 min-h-[60px]" 
          : "flex flex-col items-center mt-12 mb-10"
      }`}
    >
      {/* 1. Logo Section to left */}
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
          <h1 className="text-white font-bold tracking-tight text-3xl">
            Firefox
          </h1>
        </div>
      </div>

      {/* 2. Logo section middle */}
      <div 
        className={`relative w-full ${
          isCollapsed 
            ? "max-w-[650px]" 
            : "max-w-2xl"
        }`}
      >
        <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" 
            alt="G" 
            className="w-6 h-6"
          />
        </div>
        <Input 
          type="text" 
          placeholder="Search with Google or enter address" 
          className="w-full pl-14 pr-4 py-7 bg-[#2B2A33] border-none rounded-xl text-white placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-blue-500 shadow-2xl text-xl"
        />
      </div>
    </div>
  );
}