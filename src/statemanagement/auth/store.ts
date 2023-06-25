import { create } from 'zustand';
import Auth__Interface from '../../entities/Auth';

interface AuthStore {
  user: Auth__Interface | null;
  login: (userData: Auth__Interface) => void;
  logout: () => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  login: (userData) => set(() => ({ user: userData })),
  logout: () => set(() => ({ user: null })),
}));

export default useAuthStore;
