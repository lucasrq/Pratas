import {create} from 'zustand';

interface ToggleState {
    isActive: boolean;
    toggleActive: () => void;
  }

interface ToggleSideBar{
    isSideBarActive: boolean;
    toggleSideBarActive: () => void;
}

export const useToggleSideBar = create<ToggleSideBar>((set) => ({
  isSideBarActive: false,
  toggleSideBarActive: () => set((state) =>({isSideBarActive: !state.isSideBarActive}))
}));

const useToggleStore = create<ToggleState>((set) => ({
    isActive: false,
    toggleActive: () => set((state) =>({isActive: !state.isActive}))
  }));

export default useToggleStore;   
