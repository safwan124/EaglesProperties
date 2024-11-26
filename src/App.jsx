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
import About from './components/about/about';
import Blogs from './components/blogs/blogs';
import Contact from './components/contact/contact';
import CampaignPage from './routes/campagin';

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
        },
        {
          path: "/about-us",
          element: <About />
        },
        {
          path: "/blogs",
          element: <Blogs />
        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path: "/campaign",
          element: <CampaignPage />
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
