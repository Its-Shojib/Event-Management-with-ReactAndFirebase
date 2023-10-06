import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css";

import { RouterProvider } from "react-router-dom";
import router from './Routes/MainRoute';
import AuthProvider from './AuthProvider/AuthProvier';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>

  </React.StrictMode>
);