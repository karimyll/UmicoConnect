import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import './main.css'
import Step1 from './pages/Login/Step1.jsx'
import Step2 from './pages/Login/Step2.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider
    router={createBrowserRouter([
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'login/step/1',
        element: <Step1 />,
      },
      {
        path: 'login/step/2',
        element: <Step2 />,
      }
    ])}
  />
)
