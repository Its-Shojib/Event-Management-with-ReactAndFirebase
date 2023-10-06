import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from './../AuthProvider/AuthProvier';


const Header = () => {

    let { user, Logout } = useContext(AuthContext)

    let links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        {
            user && <>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
            </>
        }
        <li><NavLink to='/login'>Login</NavLink></li>
    </>


    let handleLogout = () => {
        Logout()
            .then()
            .catch()
    }
    return (
        <div className="bg-gradient-to-r from-sky-500 to-indigo-500 rounded-lg py-2">
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 text-white">
                            {links}
                        </ul>
                    </div>
                    <h1 className="text-3xl font-bold hover:text-orange-700 text-rose-800">Weading Planner</h1>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <>
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user.photoURL} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><p>{user.displayName}</p></li>
                                    <li><button onClick={handleLogout}>Logout</button></li>
                                </ul>
                            </div>
                        </> : <Link to='/login'>Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;