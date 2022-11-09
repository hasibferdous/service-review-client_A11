import { createBrowserRouter} from 'react-router-dom'
import Main from '../../Layout/Main/Main';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import Register from '../../Pages/Register/Register';

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
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            // {
            //     path: '/checkout/:id',
            //     element: <Checkout></Checkout>,
            //     loader: ({params})=> fetch(`https://car-server-oennndmb9-hasibferdous.vercel.app/services/${params.id}`)
            //   },
            //   {
            //     path: '/orders',
            //     element: <Orders></Orders>
            //   }
          ]

        }
      ])
export default router;