import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
  

function App() {
  
  const routes = createBrowserRouter([
    {path:'/',element:<Layout></Layout>,children:[
      {index:true,element:<Home></Home>},
      {path:'/about',element:<About></About>},
      {path:'/portfolio',element:<Portfolio></Portfolio>},
      {path:'/contact',element:<Contact></Contact>},
      {
        path:'*',element:<NotFound></NotFound>
      }
    ]}
  ])
  

  return (
    <>
       <RouterProvider router={routes}/>
    </>
  )
}

export default App
