import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import React from 'react'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
])
