
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import SosalLogin from '../Shared/SosalLogin';
import { toast } from 'react-toastify';

const SighinUp = () => {
    const { creaetUser } = useContext(AuthContext);
    const navigate = useNavigate()
    const [fireBaseErr, setFireBaseErr] = useState('')
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {

        creaetUser(data.email,data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                 toast.success("Sighin Up sucess")
                 navigate("/login")
                console.log(user);
            })
            .catch((error) => {
                const errorMessage = error.message;
                setFireBaseErr(errorMessage)

            });



        console.log(data)
        reset()
    };




   


    return (
        <div>
            <main className="mx-auto flex min-h-screen w-full  items-center justify-center bg-slate-500 text-white">
                <section className="flex w-[30rem] flex-col space-y-10">



                    <form onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className="text-center text-4xl font-medium">Sighin Up</div>

                        <div className="w-full my-4 transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
                            <input type="text"
                                placeholder="Your Name"
                                {...register("name", { required: true })}
                                className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none" />
                        </div>


                        <div className="w-full my-4 transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
                            <input type="email"
                                placeholder="Your email"
                                {...register("email", { required: true })}
                                className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none" />
                        </div>



                        <div className="w-full my-7 transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
                            <input type="password"
                                placeholder="Your Password"
                                {...register("password",
                                    {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                    },

                                )}
                                className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none" />
                        </div>



                        <div className="w-full my-7 transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
                            <input type="password"
                                placeholder="Confirm Password"
                                {...register("confirm", { required: true })}
                                className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none" />
                        </div>



                        <div className="my-4">
                            <span className="text-red-400">{fireBaseErr}</span>
                            {errors.email && <span className="text-red-400">This field is required</span>}
                            {errors.password && <span className="text-red-400">This field is required</span>}
                            {errors.password?.type == "minLength" && <span className="text-red-400">Give At List 6 digit password</span>}
                            {errors.password?.type == "maxLength" && <span className="text-red-400">Give must be less then 20 charecter</span>}
                            {errors.name && <span className="text-red-400">This field is required</span>}
                        </div>


                        <button type='submit'
                            className="w-full transform rounded-sm bg-slate-600 py-2 font-bold duration-300 hover:bg-slate-400">SighinUp</button>

                        <div className="divider ">OR</div>

                     

                        <p className="text-center text-lg">
                            Have An account?
                            <Link to='/login'>  <a href="#" className="font-medium text-white underline-offset-4 underline">Login Now</a></Link>
                        </p>






                    </form>
                    <SosalLogin></SosalLogin>
                </section>
            </main>
        </div>
    );
};

export default SighinUp;