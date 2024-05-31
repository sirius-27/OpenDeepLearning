// lib/utils.ts
// @ts-ignore
import clsx, { ClassValue } from "clsx";
// @ts-ignore
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
