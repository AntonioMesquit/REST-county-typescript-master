import { createBrowserRouter } from 'react-router-dom'

import { AppDetails } from './pages/_layouts/details'
import { AppHome } from './pages/_layouts/home'
import { Details } from './pages/details/details'
import { Home } from './pages/home/home'
export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppHome />,
    children: [{ path: '/', element: <Home /> }],
  },
  {
    path: '/',
    element: <AppDetails />,
    children: [{ path: '/details/:param', element: <Details /> }],
  },
])
