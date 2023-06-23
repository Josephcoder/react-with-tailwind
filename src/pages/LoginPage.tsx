import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import { z } from 'zod';
import useAuthStore from '../statemanagement/auth/store';
import { Card } from '../components/Card';

const schema = z.object({
  username: z
    .string()
    .min(3, { message: 'Name must be at least 3 characters.' }),
  password: z
    .string()
    .min(5, { message: 'Password must be at least 5 characters.' }),
});
export type FormData = z.infer<typeof schema>;

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const { user, login } = useAuthStore();

  const onSubmit = (data: FormData) => {
    login(data);
  };

  if (user) return <Navigate replace to="/dashboard" />;

  return (
    <div className="flex justify-center items-center w-full py-20">
      <div className="flex flex-col gap-4">
        <div className="flex items-center flex-col gap-2 mt-10">
          <h1 className="text-2xl font-bold">CAMIS ADMIN</h1>
          <h2 className="2xl">Sign in</h2>
        </div>
        <Card>
          <form
            className="flex flex-col w-96 gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Username
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                {...register('username', {})}
                name="username"
                placeholder="Enter username..."
              />
              {errors.username && (
                <text className="text-red-600">{errors.username.message}</text>
              )}
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Password
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                {...register('password')}
                name="password"
                placeholder="Enter password..."
              />
              {errors.password && (
                <label className="text-red-600">
                  {errors.password.message}
                </label>
              )}
            </div>
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              disabled={!isValid}
              type="submit"
            >
              Sign in
            </button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
