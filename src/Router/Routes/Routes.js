import { createBrowserRouter} from 'react-router-dom'
import Main from '../../Layout/Main/Main';
import Blogs from '../../Pages/Blogs/Blogs';
import Checkout from '../../Pages/Checkout/Checkout';
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
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/review/:id',
                element: <PrivateRoute><Reviews></Reviews></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/review',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
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
            //  {
            //      path: '/checkout/:id',
            //      element: <Checkout></Checkout>,
            //      loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
            //    },
               {
                 path: '/services',
                element: <Services></Services>
               },
            //    {
            //     path: '/servicedetails/:id',
            //     element: <ServiceDetails></ServiceDetails>,
            //     loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
            //    }
          ]

        }
      ])
export default router;