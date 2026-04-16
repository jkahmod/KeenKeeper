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
// http://localhost:5173/;

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
      },
      {
        path:"/friendsDetails/:friendId",
        element:<FriendsDetails></FriendsDetails>,
        loader: ()=> fetch("/friends.json"),

      }
    ],
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
