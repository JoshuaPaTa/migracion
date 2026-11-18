import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { router } from './routes/routersApp'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Footer from './components/Footer'
import Header from './components/Header'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={createBrowserRouter(router)}/>
  </StrictMode>
)
