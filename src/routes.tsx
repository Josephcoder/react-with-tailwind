import { createBrowserRouter } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ErrorPage from './pages/ErrorPage';
import DashboardPage from './pages/DashboardPage';
import Layout from './pages/Layout';
import SchoolPage from './pages/SchoolPage';
import StudentPage from './pages/StudentPage';
import TeacherPage from './pages/TeacherPage';
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
        path: '/dashboard/schools/marks',
        element: <SchoolPage />,
      },
      {
        path: '/dashboard/teachers/marks',
        element: <TeacherPage />,
      },
      {
        path: '/dashboard/students/marks',
        element: <StudentPage />,
      },
    ],
  },
]);

export default router;
