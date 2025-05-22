import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";
import Contact from './pages/Contact';

import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import RootLayout from "./Layouts/RootLayout";

function App() {

  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path="" element={<RootLayout/>}>
        <Route path='' element={<Home/>}/>
          <Route path='products' element={<Product/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='contact' element={<Contact/>}/>
      </Route>
    )
  )

  return (
    <RouterProvider router={router}/>
  )
}

export default App
