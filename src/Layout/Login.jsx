import { useContext, useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import SosalLogin from "../Shared/SosalLogin";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
    // const [input,setInput] = useState('')
    const navigate = useNavigate();
    const location = useLocation();
    const [fireBaseErr, setFireBaseErr] = useState('')

    const from = location.state?.from?.pathname || "/";

    const { loginUser, forgetPassword } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors },getValues,...abc } = useForm();

    console.log(abc);
    const [open, setOpen] = useState(false);


    const togglePasswordVisibility = () => {
        setOpen(!open);
    };


// const handleEmailInput= (e)=>{
//     console.log(e.target.value);
//   setInput(e.target.value)
// }




    const onSubmit = data => {

        loginUser(data.email, data.password)
            .then((userCredential) => {

                const user = userCredential.user;
                toast.success("login sucessfully")
                navigate(from, { replace: true });
                console.log(user);

            })
            .catch((error) => {

                const errorMessage = error.message;
                setFireBaseErr(errorMessage);

            });
        console.log(data)
    };
   

    
    const handleForforgetPass = () => {
        const email = getValues("email")

        console.log(email);
        if (!email) {
            return toast.error("Please provide your email");
        }
        forgetPassword(email)
            .then(() => {
                toast.error("Check your email for password reset instructions");
            })
            .catch(err => {
                setFireBaseErr(err.message);
            });
    };




    return (
        <div>
            <main className="mx-auto flex min-h-screen w-full items-center justify-center bg-slate-500 text-white">
                <section className="flex w-[30rem] flex-col space-y-10">
                    <form onSubmit={handleSubmit(onSubmit)}
                    >


                        <div className="text-center text-4xl font-medium">Log In</div>

                        <div className="w-full transform border-b-2 my-5 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
                            <input 
                                type="email"
                               
                                name="email"
                                placeholder="Email"
                                {...register("email", { required: true })}
                                className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
                            />
                        </div>

                        <div className="my-7 w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
                            <input type={open ? 'text' : 'password'}
                                placeholder="Password"
                                {...register("password", { required: true })}
                                className="w-full relative border-none bg-transparent outline-none placeholder:italic focus:outline-none" />

                            <div onClick={togglePasswordVisibility}
                                className="absolute right-4 bottom-3">
                                {open ? <span><FaEye></FaEye></span> : <span><FaEyeSlash></FaEyeSlash></span>}

                            </div>
                        </div>
                        <div className="my-3">
                            {errors.email && <span className="text-red-400">This field is required</span>}
                            {errors.password && <span className="text-red-400">This field is required</span>}
                            <span className="text-red-400">{fireBaseErr}</span>
                        </div>
                        <p onClick={handleForforgetPass}
                            className="text-end transform font-semibold  duration-300 hover:text-slate-300">FORGOT PASSWORD?</p>
                        <button type="submit"
                            className="transform rounded-sm my-5 bg-slate-700 py-2 font-bold duration-300 hover:bg-slate-400 w-full">LOG IN</button>

                        <SosalLogin></SosalLogin>
                        <div className="text-center">


                            <p className=" text-lg">
                                No account?
                                <Link to='/sighinup'>  <a href="#" className="font-medium text-white underline-offset-4 underline">Sighin Up</a></Link>
                            </p>
                        </div>
                    </form>
                </section>
            </main>
        </div>
    );
};

export default Login;