import { useContext, useState } from "react";
import { FaCheck, FaShoppingCart } from "react-icons/fa";
import { toast } from "react-toastify";
import { AuthContext } from "../../Provider/AuthProvider";
import UseCarts from "../../Hooks/UseCarts";


const Shopcard = ({product}) => {
    const [togooleCart,setTogooleCart] = useState(true);
    const {user} = useContext(AuthContext)
    const [,refetch] = UseCarts()
    const {name,price,img,_id,category,ratings,shipping,quantity,ratingsCount,stock} =product;

    const handleCartClick = () => {
       const cartDetails= {name,price,img,_id,category,ratings,email:user.email,
        stock,shipping,quantity,ratingsCount}
        fetch("http://localhost:5000/addCarts",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(cartDetails)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                refetch()
                toast.success("cart add successfully")
            }
        })
        .catch(err=>{
            console.log(err);
        })

        setTogooleCart(!togooleCart);
      };
    
    


   
    return (
        <div className="rounded overflow-hidden shadow-lg flex flex-col my-5">
            <a href="#"></a>
            <div className="relative"><a href="#">
                    <img className="w-full"
                        src={img}
                        alt="Sunset in the mountains"/>
                    <div
                        className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                    </div>
                </a>
                <a href="#!">
                    <div
                        className="text-xs absolute top-0 right-0 bg-slate-500 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                        ${price}
                    </div>
                </a>
            </div>
            <div className="flex justify-between px-4 my-3">
               <h2>{name}</h2>
              { togooleCart ? <>
                <span onClick={handleCartClick}
               className="text-2xl text-slate-500"><FaShoppingCart></FaShoppingCart></span>
              </>:<>
              <span className="text-2xl text-slate-500"><FaCheck></FaCheck></span>
            
              </>
}
              </div>   
              </div>   
       
    );
};

export default Shopcard;