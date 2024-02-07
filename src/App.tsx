import './global.css'

import { QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'

import { ThemeProvider } from '@/components/themes/theme-provider'

import { queryClient } from './lib/react-query'
import { router } from './routes'
export function App() {
  return (
    <ThemeProvider storageKey="frontendmentor-theme" defaultTheme="dark">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  )
}
