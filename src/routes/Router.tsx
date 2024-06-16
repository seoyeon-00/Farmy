import { RouterProvider } from 'react-router-dom';
import { router } from './routing';

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
