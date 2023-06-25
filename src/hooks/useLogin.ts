import { useMutation } from '@tanstack/react-query';
import Auth__Interface from '../entities/Auth';
import apiClient from '../services/apiClient';
import useAuthStore from '../statemanagement/auth/store';
const APIClient = new apiClient<Auth__Interface>('/auth');
const useLogin = (onAdd: () => void) => {
  const { login } = useAuthStore();

  return useMutation({
    mutationFn: APIClient.post,
    onMutate: () => {
      onAdd();
    },
    onSuccess: (res) => {
      login(res);
    },
  });
};
export default useLogin;
