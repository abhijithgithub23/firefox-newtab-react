import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger 
} from "./ui/sheet";
import { Switch } from "./ui/switch";
import { Button } from "./ui/button";
import { Settings, Plus } from "lucide-react";
import type { BackgroundSettings } from "../types";
import { useRef } from "react";

interface Props {
  bgSettings: BackgroundSettings;
  setBgSettings: (settings: BackgroundSettings) => void;
  showShortcuts: boolean;
  setShowShortcuts: (val: boolean) => void;
  showNews: boolean;
  setShowNews: (val: boolean) => void;
}

export default function CustomizePanel({
  // bgSettings,
  setBgSettings,
  showShortcuts,
  setShowShortcuts,
  showNews,
  setShowNews
}: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  //  DEFINE YOUR DEFAULT BACKGROUND HERE
  const defaultBackground: BackgroundSettings = {
    type: "color",
    value: "bg-[#1C1B22]"
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
  if (!file) return;

  if (file.size > 4 * 1024 * 1024) {
    alert("Image too large. Keep it under 4MB.");
    return;
  }

  const reader = new FileReader();

  reader.onloadend = () => {
    const base64String = reader.result as string;

    setBgSettings({
      type: "image",
      value: base64String,
    });
  };

  reader.readAsDataURL(file);
};

  const handleResetDefault = () => {
    setBgSettings(defaultBackground);
  };

  return (
    <Sheet modal={false}>
      <SheetTrigger asChild>
        <Button
          variant="secondary"
          className="fixed bottom-6 right-6 rounded-full bg-[#2B2A33] text-white hover:bg-[#383841] border-none shadow-lg px-4 py-2"
        >
          <Settings className="w-4 h-4 max-[1499px]:mr-0 mr-2" />
          <span className="max-[1499px]:hidden">Customize</span>
        </Button>
      </SheetTrigger>

      <SheetContent className="bg-[#1C1B22] border-l-gray-800 text-white w-[350px]">
        <SheetHeader className="flex flex-row items-center justify-between  mt-6">
          <SheetTitle className="text-white text-xl">
            Wallpapers
          </SheetTitle>

          <button
            onClick={handleResetDefault}
            className="text-xs text-blue-400 hover:text-blue-300"
          >
            Reset Default
          </button>
        </SheetHeader>

        <div className="mt-6 space-y-6">
          <div className="grid grid-cols-3 gap-3">
            <div className="flex flex-col items-center gap-2">
              <button
                className="w-full h-16 rounded-md bg-[#4A154B] border-2 border-transparent hover:border-blue-500"
                onClick={() =>
                  setBgSettings({ type: "color", value: "bg-[#4A154B]" })
                }
              />
              <span className="text-xs text-gray-400">Purple</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <button
                className="w-full h-16 rounded-md bg-[#15244b] border-2 border-transparent hover:border-blue-500"
                onClick={() =>
                  setBgSettings({ type: "color", value: "bg-[#15244b]" })
                }
              />
              <span className="text-xs text-gray-400">Blue</span>
            </div>


            {/* <div className="flex flex-col items-center gap-2">
              <button
                className="w-full h-16 rounded-md bg-cover bg-center border-2 border-transparent hover:border-blue-500"
                style={{
                  backgroundImage:
                    "https://unsplash.com/photos/starry-night-sky-over-snow-covered-mountains-ktllNfb9cBs"
                }}
                onClick={() =>
                  setBgSettings({
                    type: "image",
                    value:
                      "https://unsplash.com/photos/starry-night-sky-over-snow-covered-mountains-ktllNfb9cBs"
                  })
                }
              />
              <span className="text-xs text-gray-400">Photographs</span>
            </div> */}

            <div className="flex flex-col items-center gap-2">
              <button
                onClick={() => fileInputRef.current?.click()}
                className="w-full h-16 rounded-md border-2 border-dashed border-gray-600 flex items-center justify-center hover:border-gray-400"
              >
                <Plus className="w-6 h-6 text-gray-400" />
              </button>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                ref={fileInputRef}
                onChange={handleFileUpload}
              />
              <span className="text-xs text-gray-400">Upload</span>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-800 space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <label className="text-sm font-medium">Shortcuts</label>
                <p className="text-xs text-gray-400">
                  Sites you save or visit
                </p>
              </div>

              <Switch
                checked={showShortcuts}
                onCheckedChange={setShowShortcuts}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <label className="text-sm font-medium">
                  Recommended stories
                </label>
                <p className="text-xs text-gray-400">
                  Exceptional content
                </p>
              </div>

              <Switch
                checked={showNews}
                onCheckedChange={setShowNews}
              />
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}