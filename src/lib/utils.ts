import { clsx, type ClassValue } from "clsx"  //condtionally joins class names
import { twMerge } from "tailwind-merge"      //removes conflicting tailwind classes, keeping the last one

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
