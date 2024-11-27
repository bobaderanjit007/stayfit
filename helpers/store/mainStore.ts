import { create } from "zustand";

interface MainStore {
  isShowSidebar: boolean;
  setIsShowSidebar: (value: boolean) => void;
}

const useMain = create<MainStore>((set) => ({
  isShowSidebar: true,
  setIsShowSidebar: (value: boolean) => set({ isShowSidebar: value }),
}));

export default useMain;
