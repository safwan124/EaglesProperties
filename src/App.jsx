import HomePage from './routes/homePage/homePage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './routes/layout/layout';
import MysoreProperties from './routes/mysoreProperties/mysoreProperties';
import BangaloreProperties from './routes/bangloreProperties/bangloreProperties';
import BanglorePropertyDetail from './routes/bangloreProperties/banglorePropertyDetails';
import MysorePropertyDetail from './routes/mysoreProperties/mysorePropertyDetails';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />
        },
        {
          path: "/mysore-listings",
          element: <MysoreProperties />
        },
        {
          path: "/mysore-listings/:id",
          element: <MysorePropertyDetail />
        },
        {
          path: "/bangalore-listings",
          element: <BangaloreProperties />
        },
        {
          path: "/bangalore-listings/:id",
          element: <BanglorePropertyDetail />
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
