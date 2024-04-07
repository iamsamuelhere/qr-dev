import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Auth from './pages/auth/Auth.jsx';
import SignIn from './pages/auth/SignIn.jsx';
import SignUp from './pages/auth/SignUp.jsx';
import Dashboard from './pages/dashboard/Dashboard.jsx';

// import QRCode from 'react-qr-code';
// <QRCode value="https://www.google.com" />
const router = createBrowserRouter([
  {
    path: '/',
    element: <Auth />,
  },
  {
    path: '/sign-in',
    element: <SignIn />,
  },
  {
    path: '/sign-up',
    element: <SignUp />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
