
import './App.css'
import { createBrowserRouter,Navigate ,RouterProvider} from 'react-router-dom'

import Body from './components/Body'
import Login from './components/Login'
import Browse from './components/Browse'

const appRouter = createBrowserRouter([
  {
    path: '/',
  
    element: <Body />,
    children: [
      {
        index: true,
        element: <Navigate to="/login" replace />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/browse',
        element: <Browse />,
      },
    ],
  },
])

function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  )
}

export default App
 