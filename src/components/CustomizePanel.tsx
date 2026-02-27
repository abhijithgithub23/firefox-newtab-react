import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Switch } from "./ui/switch";
import { Button } from "./ui/button";
import { Settings, Plus } from "lucide-react";
import type { BackgroundSettings } from "../types";
import { useRef } from "react";

interface Props {
  bgSettings: BackgroundSettings;
  setBgSettings: (settings: BackgroundSettings) => void;
}

export default function CustomizePanel({ bgSettings, setBgSettings }: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setBgSettings({ type: 'image', value: imageUrl });
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="secondary" className="fixed bottom-6 right-6 rounded-full bg-[#2B2A33] text-white hover:bg-[#383841] border-none shadow-lg px-4 py-2">
          <Settings className="w-4 h-4 mr-2" />
          Customize
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-[#1C1B22] border-l-gray-800 text-white w-[350px]">
        <SheetHeader>
          <SheetTitle className="text-white text-xl text-left">Wallpapers</SheetTitle>
        </SheetHeader>
        <div className="mt-6 space-y-6">
          <div className="grid grid-cols-3 gap-3">
            {/* Color Preset */}
            <div className="flex flex-col items-center gap-2">
              <button 
                className="w-full h-16 rounded-md bg-[#4A154B] border-2 border-transparent hover:border-blue-500 focus:border-blue-500"
                onClick={() => setBgSettings({ type: 'color', value: 'bg-[#4A154B]' })}
              />
              <span className="text-xs text-gray-400">Solid color</span>
            </div>
            {/* Image Preset */}
            <div className="flex flex-col items-center gap-2">
              <button 
                className="w-full h-16 rounded-md bg-cover bg-center border-2 border-transparent hover:border-blue-500"
                style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=300&auto=format&fit=crop)' }}
                onClick={() => setBgSettings({ type: 'image', value: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1920&auto=format&fit=crop' })}
              />
              <span className="text-xs text-gray-400">Photographs</span>
            </div>
            {/* Custom Upload */}
            <div className="flex flex-col items-center gap-2">
              <button 
                onClick={() => fileInputRef.current?.click()}
                className="w-full h-16 rounded-md border-2 border-dashed border-gray-600 flex items-center justify-center hover:border-gray-400"
              >
                <Plus className="w-6 h-6 text-gray-400" />
              </button>
              <input type="file" accept="image/*" className="hidden" ref={fileInputRef} onChange={handleFileUpload} />
              <span className="text-xs text-gray-400">Upload</span>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-800 space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <label className="text-sm font-medium">Shortcuts</label>
                <p className="text-xs text-gray-400">Sites you save or visit</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <label className="text-sm font-medium">Recommended stories</label>
                <p className="text-xs text-gray-400">Exceptional content</p>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}