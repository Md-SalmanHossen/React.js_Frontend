import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";
//import Contact from './pages/Contact';

import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import RootLayout from "./Layouts/RootLayout";
import ContactLayout from "./Layouts/ContactLayout";
import ContactInfo from "./components/ContactInfo";
import ContactForm from "./components/ContactForm";
import PageNotFound from "./components/PageNotFound";
import JobsLayout from "./Layouts/JobsLayout";
import Jobs, { jobsLoader } from "./pages/Jobs";
import JobDetails, { jobDetailsLoader } from "./components/JobDetails";
import Error from "./components/Error";

function App() {

  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path="" element={<RootLayout/>}>
        <Route path='' element={<Home/>}/>
          <Route path='products' element={<Product/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='contact' element={<ContactLayout/>}>
            <Route path="info" element={<ContactInfo/>}/>
            <Route path="form" element={<ContactForm/>}/>
          </Route>
          <Route path='jobs' element={<JobsLayout/>} errorElement={<Error/>}>
            <Route index element={<Jobs/>} loader={jobsLoader}/>
            <Route path=":id" element={<JobDetails/>} loader={jobDetailsLoader}/>
          </Route>
          <Route path="*" element={<PageNotFound/>}/>
      </Route>
    )
  )

  return (
    <RouterProvider router={router}/>
  )
}

export default App
