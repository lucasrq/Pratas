import {create} from 'zustand';

interface ToggleState {
    isActive: boolean;
    toggleActive: () => void;
  }

const useToggleStore = create<ToggleState>((set) => ({
    isActive: false,
    toggleActive: () => set((state) =>({isActive: !state.isActive}))
  }));

export default useToggleStore;    