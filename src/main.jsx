import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainLayout from './layout/MainLayout.jsx';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/HomePage.jsx';
import Register from './pages/Register.jsx';
import ContextApi from './provider/ContextApi.jsx';
import Login from './pages/Login.jsx';
import AddServicePrivate from './private/AddServicePrivate.jsx';
import AddService from './pages/AddService.jsx';
import Services from './pages/Services.jsx';
import ServiceDetailsPrivate from './private/ServiceDetailsPrivate.jsx';
import ServiceDetails from './pages/ServiceDetails.jsx';
import MyReviewsPrivate from './private/MyReviewsPrivate.jsx';
import MyReviews from './pages/MyReviews.jsx';
import MyServicesPrivate from './private/MyServicesPrivate.jsx';
import MyServices from './pages/MyServices.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import { HelmetProvider } from 'react-helmet-async';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <HomePage></HomePage>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path:'/login',
        element: <Login></Login>
      },
      {
        path: '/add-service',
        element: <AddServicePrivate><AddService></AddService></AddServicePrivate>
      },
      {
        path: '/services',
        element: <AddServicePrivate><Services></Services></AddServicePrivate>
      },
      {
        path: '/service-details/:id',
        element: <ServiceDetailsPrivate><ServiceDetails></ServiceDetails></ServiceDetailsPrivate>,
        loader: ({params})=> params 
      },
     {
      path: '/my-reviews',
      element: <MyReviewsPrivate><MyReviews></MyReviews></MyReviewsPrivate>
     },
     {
      path: '/my-services',
      element:<MyServicesPrivate><MyServices></MyServices></MyServicesPrivate>
     }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <HelmetProvider>
     <ContextApi>
     <RouterProvider router={router} />
     </ContextApi>
     </HelmetProvider>
  </StrictMode>,
)
