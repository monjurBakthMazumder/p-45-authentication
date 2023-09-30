import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import myCreateRoute from './Router/Route.jsx'
import AuthProvider from './Provider/AuthProvider/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={myCreateRoute}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
