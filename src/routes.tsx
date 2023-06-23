import { createBrowserRouter } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ErrorPage from './pages/ErrorPage';
import DashboardPage from './pages/DashboardPage';
import Layout from './pages/Layout';
import SchoolPage from './pages/SchoolPage';
const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/dashboard',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: '/dashboard/school',
        element: <SchoolPage />,
      },
    ],
  },
]);

export default router;
