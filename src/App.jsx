import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import NavbarLay from './navbarLayout/NavbarLay'

import About from './pages/About';
import Info from './coursepage/Info';

import Cursor from './cursor/Cursor';
import PageOne from './page1/PageOne';
import Navbar from './Nav/Navbar';
import Telegram from './telegram/Telegram';
import Itabout from './ItAbout/Itabout';

import Notfound from './404/NotFound';
import Galery from './Galery/Galery';
import Sharh from './sharh/Sharh';
import Courses from './Courses/Courses';
import Mentors from './Mentors/Mentors';
import Paralax from './paralax/Paralax';
import Footer from './footer/Footer';  
import LogIn from './LogIn/LogIn';
import Dashboard from './Dashboard/Dashboard';
import Onas from './onas/Onas';



function App() {
  const routes = createBrowserRouter([
    {
      path:'/',
      element: <NavbarLay/>,
      children: [
        {
          path: '/',
          element: [
            <>
              <Navbar/>
              <PageOne/>
              <Cursor/>
              <Itabout/>
              <Mentors/>
              <Paralax/>
              <Courses/>
              <Sharh/>
              <Telegram/>
              <Footer/>
            </>
          ]
        },
        {
          path: '/onas',
          element: <Onas/>
        },
        {
          path: '/about',
          element: <About/>
        },
        {
          path: '/info',
          element: <Info/>
        },
        {
          path: '*',
          element: <Notfound/>
        },
        {
          path: '/galery',
          element: <Galery/>
        },
        {
          path: '/signup',
          element: <LogIn/>
        },
        {
          path: '/dashboard',
          element: <Dashboard/>
        }
      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  )
}

export default App
