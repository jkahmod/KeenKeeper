import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import Layoutpage from './Layouts/Layoutpage';
import Homepage from './Page/Homepage/Homepage';
import Timeline from './Page/Timeline/Timeline';
import Notfound from './Layouts/Notfound';
import Stats from './Page/Stats/Stats';
import FriendsDetails from './Page/FriendsDetails/FriendsDetails';

import ActivityProvider from './Context/ActivityContext';


import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layoutpage />,
    errorElement: <Notfound />,
    children: [
      {
        index: true,
        element: <Homepage />
      },
      {
        path: "/timeline",
        element: <Timeline />
      },
      {
        path: "/stats",
        element: <Stats />
      },
      {
        path: "/friendsDetails/:friendId",
        element: <FriendsDetails />,
        loader: () => fetch("/friends.json"),
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <ActivityProvider>
      <RouterProvider router={router} />
      <ToastContainer position="top-right" />
    </ActivityProvider>

  </StrictMode>,
)