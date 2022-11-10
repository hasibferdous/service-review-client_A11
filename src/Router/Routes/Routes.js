import { createBrowserRouter} from 'react-router-dom'
import Main from '../../Layout/Main/Main';
import Blogs from '../../Pages/Blogs/Blogs';
import AddService from '../../Pages/Home/AddService/AddService';
import Home from '../../Pages/Home/Home/Home';
import ServiceAll from '../../Pages/Home/Services/ServiceAll';
import ServiceDetails from '../../Pages/Home/Services/ServiceDetails';
import Services from '../../Pages/Home/Services/Services';
import Login from '../../Pages/Login/Login';
import Register from '../../Pages/Register/Register';
import MyReviews from '../../Pages/Reviews/MyReviews';
import Reviews from '../../Pages/Reviews/Reviews';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

    const router = createBrowserRouter([
        {
          path: '/',
          element: <Main></Main>,
          children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/serviceall',
                element: <ServiceAll></ServiceAll>
            },
            {
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`https://service-review-server-theta.vercel.app/services/${params.id}`)
            },
            {
                path: '/reviews/:id',
                element: <PrivateRoute><Reviews></Reviews></PrivateRoute>,
                loader: ({ params }) => fetch(`https://service-review-server-theta.vercel.app/reviews/${params.id}`)
            },

            {
                path: '/review',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path:'/add-service', 
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <Blogs></Blogs>
            },
               {
                 path: '/services',
                element: <Services></Services>
               },
               {
                path: '/myreviews',
                element: <MyReviews></MyReviews>
              },
              {
                path:'*', 
                element: <div className='m-5 p-5'><h1><b>404 Error !!! <p>This route is not found</p></b></h1></div>
        }

          ]

        }
      ])
export default router;