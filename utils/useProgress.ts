import create from "zustand";

export const useProgress = create((set: any) => ({
  isAnimating: false,
  setIsAnimating: (isAnimating: any) => set(() => ({ isAnimating })),
}));
