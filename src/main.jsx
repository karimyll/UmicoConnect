import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './layouts/main-layout/index.jsx'
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'
import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider
    router={createBrowserRouter([
      {
      element: <MainLayout/>,
      children: [
        {
          index: true,
          element: <Login/>,
        },
        {
          path: 'home',
          element: <Home/>,
        },
      ],
    },
    ])}
  />
)
