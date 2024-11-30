import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from '../../layouts/Layout';
import MainPage from '../../pages/MainPage/MainPage';

export const Router = () => {
  return <RouterProvider router={router} />;
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <MainPage />
      }
    ]
  }
]);
