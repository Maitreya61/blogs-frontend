import './App.css';
import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Create from './pages/create/Create'
import BlogDetails from './pages/blogDetails/BlogDetails'
import UpdateBlog from './pages/updateBlog/UpdateBlog'


const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/register',
    element:<Register/>
  },
  {
    path:'/create',
    element:<Create/>
  },
  {
    path:'/blogDetails/:id',
    element:<BlogDetails/>
  },
  {
    path:'/updateBlog/:id',
    element:<UpdateBlog/>
  },
  
])

function App() {
  return (
    <RouterProvider router ={router}/>
  );
}

export default App;
