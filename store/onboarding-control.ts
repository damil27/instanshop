import { create } from 'zustand';

interface PageState {
  page: number;
  setPage: (page: number) => void;
}

export const usePageStore = create<PageState>((set) => ({
  page: 0,
  setPage: (page: number) => set({ page }),
}));
