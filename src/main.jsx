import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './layouts/main-layout/index.jsx'
import Home from './pages/Home.jsx'
import './main.css'
import Step1 from './pages/Login/Step1.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider
    router={createBrowserRouter([
      {
      element: <MainLayout/>,
      children: [
        {
          path: 'home',
          element: <Home/>,
        },
        {
          path: '/',
          element: <Home/>,
        }
      ],
    },
    {
      path: 'login/step/1',
      element: <Step1/>,
    }
    ])}
  />
)
