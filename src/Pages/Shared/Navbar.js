import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const navigate = useNavigate()
    const [user] = useAuthState(auth)
    const handleSignOut = () => {
        signOut(auth)
        navigate('/')
        localStorage.removeItem('accessToken')
    }
    return (
        <div className='bg-base-100 sticky top-0 z-50'>
            <div className="container navbar  mx-auto">
                <div className="navbar-start lg:w-1/3">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to={'/'} className='hover:bg-accent hover:text-white'>Home</Link></li>
                            <li><Link to={'/appointment'} className='hover:bg-accent hover:text-white'>Appointment</Link></li>
                            <li><Link to={'/review'} className='hover:bg-accent hover:text-white'>Reviews</Link></li>
                            <li><Link to={'/about'} className='hover:bg-accent hover:text-white'>About</Link></li>
                            <li><Link to={'/contact'} className='hover:bg-accent hover:text-white'>Contact us</Link></li>
                            {user && <li><Link to={'/dashboard'} className='hover:bg-accent hover:text-white'>Dashboard</Link></li>}
                            <li>{!user ? <Link to={'/login'} className='hover:bg-accent hover:text-white'>Login</Link> : <button onClick={handleSignOut} className="btn btn-accent text-white">SignOut</button>}</li>
                        </ul>
                    </div>
                    <Link to={'/'} className="btn btn-ghost normal-case text-xl">Doctors Portal</Link>
                </div>
                <div className='navbar-end lg:hidden'>
                    <label tabIndex="1" for="my-drawer-2" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
                <div className="navbar-end w-full hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 gap-2">
                        <li><Link to={'/'} className='hover:bg-accent hover:text-white'>Home</Link></li>
                        <li><Link to={'/about'} className='hover:bg-accent hover:text-white'>About</Link></li>
                        <li><Link to={'/appointment'} className='hover:bg-accent hover:text-white'>Appointment</Link></li>
                        <li><Link to={'/review'} className='hover:bg-accent hover:text-white'>Reviews</Link></li>
                        <li><Link to={'/contact'} className='hover:bg-accent hover:text-white'>Contact us</Link></li>
                        {user && <li><Link to={'/dashboard'} className='hover:bg-accent hover:text-white'>Dashboard</Link></li>}
                        <li>{!user ? <Link to={'/login'} className='hover:bg-accent hover:text-white'>Login</Link> : <button onClick={handleSignOut} className="btn btn-accent text-white">SignOut</button>}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;