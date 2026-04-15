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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layoutpage></Layoutpage>,
    errorElement: <Notfound></Notfound>,
    children: [
      {
        index: true,
        element:<Homepage></Homepage>
      },
      {
        path:"/timeline",
        element:<Timeline></Timeline>
      },
      {
        path:"/stats",
        element:<Stats></Stats>
      }
    ],
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
