import { Search } from 'lucide-react';
import { Input } from './ui/input';

export default function SearchBar() {
  return (
    <div className="w-full max-w-2xl mx-auto mt-12 mb-8">
      <div className="flex items-center justify-center mb-8">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Firefox_logo%2C_2019.svg" alt="Firefox" className="w-12 h-12 mr-3" />
        <h1 className="text-white text-3xl font-semibold">Firefox</h1>
      </div>
      <div className="relative">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="G" className="w-5 h-5" />
        </div>
        <Input 
          type="text" 
          placeholder="Search with Google or enter address" 
          className="w-full pl-12 pr-4 py-6 bg-[#2B2A33] border-none rounded-lg text-white placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-blue-500 shadow-lg text-lg"
        />
      </div>
    </div>
  );
}