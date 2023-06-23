import { create } from 'zustand';
import Auth from '../../entities/Auth';

interface AuthStore {
  user: Auth | null;
  login: (userData: Auth) => void;
  logout: () => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  login: (userData) => set(() => ({ user: userData })),
  logout: () => set(() => ({ user: null })),
}));

export default useAuthStore;
