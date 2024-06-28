import { create } from "zustand";

type ExitModalState = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

export const useExitModal = create<ExitModalState>((set) => ({
  isOpen: true, //change eit later to falsee 
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}))