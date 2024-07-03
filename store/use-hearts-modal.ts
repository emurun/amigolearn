import { create } from "zustand";

type HeartsModalState = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

export const useHeartsModal = create<HeartsModalState>((set) => ({
  isOpen: false, //change eit later to falsee 
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}))