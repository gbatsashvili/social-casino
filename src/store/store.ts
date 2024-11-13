import { create } from "zustand";

interface StoreState {
  configObject: Record<string, any> | null;
  setConfigObject: (newObject: Record<string, any>) => void;
}

export const useStore = create<StoreState>((set) => ({
  configObject: null,
  setConfigObject: (newObject) => set({ configObject: newObject }),
}));
