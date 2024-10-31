import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './routes/App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { CreatePost } from "./componenets/CreatePost.jsx";
import { PostList } from './store/post-list-store.jsx';

const router = createBrowserRouter([
  {
    path: "/", element: <App />, children:[
        {path:"/",element:<PostList/>},
        {path:"/create-post" ,element:<CreatePost/>}
  ]},

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={ router} />
  </StrictMode>,
)
