import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import UseCarts from "../Hooks/UseCarts";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [carts] = UseCarts()

    const handleLogOut = ()=>{
        logOut()
        .then({})
        .catch(err=>console.log(err))
    }

    return (
        <div>
            <div className="navbar px-32 py-4 bg-slate-500 opacity-60 text-white top-0 z-10 fixed">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <a className="font-bold text-4xl text-white">Eazy Buy</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white">
                        <li className="text-xl"><NavLink to='/' className={({ isActive }) => isActive ? "" : ""}>Home</NavLink></li>
                        <li className="text-xl"><NavLink to='/shop' className={({ isActive }) => isActive ? "" : ""}>Shop</NavLink></li>


                    </ul>
                </div>
                <div className="navbar-end">
                <Link to='/addproducts'> <div className="indicator mx-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                       <span className="badge badge-sm indicator-item">{carts.length ||0}</span>
                    </div>
                    </Link>
                    {
                        user ? <>
                         <button onClick={handleLogOut}
                            className="mx-2 btn btn-md bg-slate-500 text-white">logOut</button>
                        <div className="avatar ml-4 rounded-full">
                                <div className="w-12">
                                    <img src={user.photoURL} />
                                </div>
                            </div>
                           
                        </> : <>
                       <Link to='/login'> <button className="btn bg-slate-500 text-white">login</button></Link>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;