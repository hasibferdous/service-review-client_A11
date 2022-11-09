import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { FaUser } from 'react-icons/fa';

const Header = () => {
    const {logOut} = useContext(AuthContext)
    const handleLogOut = () =>{
      logOut()
      .then(() => {})
      .catch(error => console.error(error))
    }
    const {user} = useContext(AuthContext);
    const menuItems = <>
        {/* <li className='font-semibold'><Link to='/'></Link></li> */}
        {
            user?.email ? 
            <>
            <li className='font-semibold my-2 bg-indigo-200 p-1'><Link to='/myorders'>My Orders</Link></li>
            <li className='font-semibold my-2 bg-indigo-200 p-1'><Link to='/myreviews'>My Reviews</Link></li>
            <li className='font-semibold my-2 bg-indigo-200 p-1'><Link to='/addfood'>Add Food Dish</Link></li>
            <button className='bg-gray-300 mt-3 p-1 border-5-rose-200' onClick={handleLogOut}>Log out</button>
            </>
            :
            <li className='font-semibold'><Link to='/login'>Login</Link></li>
        }
    </>
    return (
        <div className="2xl:container 2xl:mx-auto">
            <div className="bg-rose-50 rounded shadow-lg py-5 px-7">
                <nav className="flex justify-between">
                    <div className="flex items-center space-x-3 lg:pr-16 pr-6">
                    <img
                    src="https://cdn-icons-png.flaticon.com/512/121/121046.png"
                    width="40"
                    height="40"
                    className="d-inline-block align-top mb-3"
                    alt="logo"/>
                    <h2 className="font-normal text-2xl leading-6 text-gray-800"><strong>Hungry kitchen</strong></h2>
                    </div>
                    <div className='mb-3 p-5 ps-5'>
                    <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 ">
                        <Link className={` 'text-white bg-indigo-200 ' : 'text-gray-600 border border-white bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-4 py-4 font-normal text-sm leading-3 shadow-md rounded`} to='/'><strong>Home</strong></Link>
                        <Link className={` 'text-white bg-indigo-200 ' : 'text-gray-600 border border-white bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-4 py-4 font-normal text-sm leading-3 shadow-md rounded`} to='/foods'><strong>Foods</strong></Link>
                        <Link className={` 'text-white bg-indigo-200 ' : 'text-gray-600 border border-white bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-4 py-4 font-normal text-sm leading-3 shadow-md rounded`} to='/reviews'><strong>Reviews</strong></Link>
                        <Link className={` 'text-white bg-indigo-200 ' : 'text-gray-600 border border-white bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-4 py-4 font-normal text-sm leading-3 shadow-md rounded`} to='/blog'><strong>Blogs</strong></Link>
                        <Link className={`'text-white bg-indigo-100 ' : 'text-gray-600 border border-white bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2.5 font-normal text-sm leading-3 shadow-md rounded`} >{menuItems}</Link>
                        <Link className={`'text-white bg-indigo-100 ' : 'text-gray-600 border border-white bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2.5 font-normal text-sm leading-3 shadow-md rounded`} href=''>
                        {user?.photoURL ? 
                        <img style={{height: '40px', color:'gray'}}
                        roundedCircle src={user?.photoURL}
                        title={`${user?.displayName ? user.displayName:user?.email}`}
                        />
                        :<FaUser></FaUser>
                        }
                        {user?.uid ?
                        <>
                        <div className='d-flex'>
                        <span className='mb-2'>{user?.displayName}</span>
                        </div>
                        </>
                        :
                        <>
                        <Link to='/register'>Register</Link>
                        </>
                        }
                        </Link>
                    </ul>
                </div>
                </nav>
            </div>
        </div>
    );
};
export default Header;