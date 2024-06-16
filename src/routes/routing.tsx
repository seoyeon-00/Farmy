import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layouts/Layout';
import MainPage from '../pages/MainPage/MainPage';

export const router = createBrowserRouter([
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
