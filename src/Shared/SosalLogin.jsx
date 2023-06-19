import {  useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FaGithubAlt, FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";


const SosalLogin = () => {
const navigate = useNavigate();
const location = useLocation();

const from = location.state?.from?.pathname || "/";

const { createGogoolUser,creteGithubUser} = useContext(AuthContext);

    const handleGogool = () => {
        createGogoolUser()
            .then((userCredential) => {

                const user = userCredential.user;
                console.log(user);
                navigate(from, { replace: true });

            })
            .catch((error) => {

                const errorMessage = error.message;
                console.log(errorMessage);

            });
    }




    const handleGithub = () => {
        creteGithubUser()
            .then((userCredential) => {

                const user = userCredential.user;
                console.log(user);
                navigate(from, { replace: true });

            })
            .catch((error) => {

                const errorMessage = error.message;
                console.log(errorMessage);

            });

    }




    return (
        <div>

            <button onClick={handleGogool}
                className="flex text-center w-full my-3 items-center bg-slate-500 border border-gray-300 rounded-lg shadow-md  px-6 py-2 text-sm font-medium text-white hover:bg-slate-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500">
                <span><FaGoogle></FaGoogle></span>

                <span className='ml-3'>Continue with Gogool</span>
            </button>


            <button onClick={handleGithub}
                className=" w-full my-3 flex text-center items-center bg-slate-500 border border-gray-300 rounded-lg shadow-md  px-6 py-2 text-sm font-medium text-white hover:bg-slate-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500">
                <span><FaGithubAlt></FaGithubAlt></span>

                <span className='ml-3'>Continue with Github</span>
            </button>

        </div>
    );
};

export default SosalLogin;