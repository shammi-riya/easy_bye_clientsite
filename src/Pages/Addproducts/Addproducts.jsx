import { FaTrash } from "react-icons/fa";
import UseCarts from "../../Hooks/UseCarts";
import { toast } from "react-toastify";


const Addproducts = () => {

    const [carts,refetch] = UseCarts();

    // const totalProductPrice = carts.reduce((accumulator, currentValue) => {
    //     return accumulator + currentValue.price;
    // }, 0);


    const totalProductPrice = carts.reduce((accumulator, cart) => {
        const itemTotal = cart.price * cart.quantity;
        return accumulator + itemTotal;
      }, 0);
      


      
     

    const handleDelete = (id) => {
       fetch(`https://eazybye-surver-shammi-riya.vercel.app/carts/${id}`,{
        method:"DELETE"
       })
       .then(res=>res.json())
       .then(data=>{
        console.log(data);
        if(data.deletedCount>0){
            refetch()
            toast.success("deleted successfully")
        }
       })

     
    }


    const handleUpdate = (id) => {
        fetch(`https://eazybye-surver-shammi-riya.vercel.app/updateQuantity/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: id }),
        })
          .then((res) => {
            console.log(res);
            return res.json();
          })
          .then((data) => {
            refetch()
            console.log(data);
          })
          .catch((error) => {
            console.error(error);
          });
      };
      
    const decreaseQuantity = (id) => {
        fetch(`https://eazybye-surver-shammi-riya.vercel.app/decreaseQuantity/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: id }),
        })
          .then((res) => {
            console.log(res);
            return res.json();
          })
          .then((data) => {
            refetch()
            console.log(data);
          })
          .catch((error) => {
            console.error(error);
            toast.error(error.message)
          });
      };
      
      



    return (
        <div className="px-20">
            < div className="my-44  flex justify-between gap-4">
                <div className="overflow-x-auto  w-[75%]">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr className="text-xl">
                                <th>
                                    #
                                </th>
                                <th>Image</th>
                                <th>Product name </th>
                                <th>Price</th>
                                <th>Quintity</th>
                                <th>Total</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-md">
                            {
                                carts.map((cart, i) => <tr key={cart._id}>
                                    <td>{i + 1} </td>

                                    <td>

                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={cart.img} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>


                                    </td>
                                    <td>{cart.name} </td>
                                    <td>${cart.price}</td>

                                    <td className="p-4 px-6 text-center whitespace-nowrap">
                                        <div>
                                            <button
                                            onClick={()=>decreaseQuantity(cart._id)}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="inline-flex w-8 h-8 text-red-600"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                                    />
                                                </svg>
                                            </button>
                                            <input
                                                type="text"
                                                name="qty"
                                                value={cart.quantity}
                                                className="w-14 py-2 text-center bg-gray-100 outline-none"
                                            />
                                            <button
                                            onClick={()=>handleUpdate(cart._id)}
                                            
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="inline-flex w-8 h-8 text-slate-600"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                    <th>
                                        ${cart.price*cart.quantity}
                                    </th>
                                    <th>
                                        <button onClick={()=>handleDelete(cart._id)}

                                            className="btn text-md border-0 text-slate-100 btn-md bg-red-600 btn-square btn-outline">
                                            <FaTrash></FaTrash>
                                        </button>

                                    </th>
                                </tr>)
                            }

                        </tbody>



                    </table>
                </div>

                <div className="w-[15%]">
                    <h1>Cheak Out</h1>
                    <h1> Total Products Price :${totalProductPrice}</h1>
                </div>
            </div>
        </div>

    );
};

export default Addproducts;