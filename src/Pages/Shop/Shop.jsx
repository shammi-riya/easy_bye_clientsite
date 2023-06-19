import { useEffect, useState } from "react";
import Shopcard from "./Shopcard";
import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";

const Shop = () => {
  const [productData, setProductData] = useState([]);
  const [productsPerPage, setProductsPerPage] = useState(10);
  const [currentsPage, setCurrensPage] = useState(0);
  const { register, handleSubmit } = useForm();
  
  const { allProducts } = useLoaderData()

  const totalPages = Math.ceil(allProducts / productsPerPage)

  const pageNumbers = [...Array(totalPages).keys()]


  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://eazybye-surver-shammi-riya.vercel.app/products?page=${currentsPage}&limit=${productsPerPage}`);

      const data = await response.json();
      setProductData(data);
    }
    fetchData();
  }, [currentsPage, productsPerPage]);



  const options = [10, 15, 20]
  function handleSelectChange(event) {
    setProductsPerPage(parseInt(event.target.value));
    setCurrensPage(0);
  }



  const onSubmit = (data) => {
    const { short } = data;
    console.log(short);
  
    fetch('https://eazybye-surver-shammi-riya.vercel.app/shortbyproducts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ sortBy: short }), // Pass the selected sorting option as 'sortBy' in the request body
    })
      .then((res) => res.json())
      .then((data) => {
        setProductData(data);
        console.log(data);
        // Handle the retrieved sorted data here
      })
      .catch((error) => {
        console.error(error);
        // Handle any errors that occurred during the request
      });
  };
  
  return (
    <div className="my-32 max-w-7xl mx-auto">

    <div className="text-end">

    <form onSubmit={handleSubmit(onSubmit)}>
     
    <select name="short" className="py-3 px-2" {...register("short")}>
    <option disabled value="">Default Sorting</option>
    <option value="price"> price Ascending</option>
    <option value="pricedes"> price Desending</option>
    <option value="ratings">ratings</option>
  </select>
  <button className="py-3 px-4 bg-slate-500 text-slate-50 font-semibold mx-2" type="submit">Sort</button>
    </form>


    </div>

      <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto my-10">
        {
          productData.map((product) => <Shopcard
            key={product.id}
            product={product}
          ></Shopcard>)
        }
      </div>

      < div className="text-center my-10">
        {
          pageNumbers.map(number =>
            <button onClick={() => setCurrensPage(number)}
              className={currentsPage === number ? 'btn bg-slate-600 text-white py-2 px-5 mx-2' : 'btn py-2 px-5 mx-2'}
              key={number}>
              {number}
            </button>)
        }
        <select className="py-2 px-3 btn"
          value={productsPerPage} onChange={handleSelectChange}>
          {options.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>

  );
};

export default Shop;