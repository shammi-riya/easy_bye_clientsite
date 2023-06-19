import { useEffect, useState } from "react";


const TrendingProducts = () => {
    const [trendenciProducts, setTrendenciProducts] = useState([])
    const [activeTab, setActiveTab] = useState("all");
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [showAllProducts, setShowAllProducts] = useState(false);

    useEffect(() => {

        fetch(`http://localhost:5000/someproducts`)
            .then(res => res.json())
            .then(data => {
                setTrendenciProducts(data)
                setFilteredProducts(data);
            })

    }, [])


    
        const handleTab = (category) => {
            if (category === "all") {
                setFilteredProducts(trendenciProducts);
              } else {
                const filtered = trendenciProducts.filter(
                  (product) => product.category === category
                );
                setFilteredProducts(filtered);
              }
              setActiveTab(category)
            };
           
   


            const handleShopNow = () => {
                setShowAllProducts(true);
              };
            



    

    return (
        <div className="max-w-7xl mx-auto my-24">
            <div className="flex justify-between items-center ">
                <div>
                    <h1 className="text-3xl font-bold">Top Trending Products</h1>
                </div>



                <div>
                    <ul className="grid grid-flow-col text-center border-b border-gray-200 text-gray-500">


                        <li className="px-3 text-xl">
                            <p onClick={() => handleTab('all')}
                                className={` border-b-4 border-transparent  ${activeTab === 'all' ? 'text-slate-600 border-slate-600 ' : ''}py-4`}>All Collection</p>
                        </li>


                        <li className="px-3 text-xl">
                            <p onClick={() => handleTab('Bag')}
                                className={`flex justify-center border-b-4 border-transparent  ${activeTab === 'Bag' ? 'text-slate-600 border-slate-600 ' : ''}py-4`}>Bag</p>
                        </li>


                        <li className="px-3 text-xl">
                            <p onClick={() => handleTab('Earphones')}
                                className={`flex justify-center border-b-4 border-transparent  ${activeTab === 'Earphones' ? 'text-slate-600 border-slate-600 ' : ''}py-4`}>Earphones</p>
                        </li>


                        <li className="px-3 text-xl">
                            <p onClick={() => handleTab('Cap')}
                                className={`flex justify-center border-b-4 border-transparent  ${activeTab === 'Cap' ? 'text-slate-600 border-slate-600 ' : ''}py-4`}>Cap</p>
                        </li>
                        <li className="px-3 text-xl">
                            <p onClick={() => handleTab("Men's Sneaker")}
                                className={`flex justify-center border-b-4 border-transparent  ${activeTab === "'Men's Sneaker'" ? 'text-slate-600 border-slate-600 ' : ''}py-4`}>Men's Sneaker</p>
                        </li>
                        

                    </ul>
                </div>
            </div>



          <div>
          <div className="grid md:grid-cols-3 grid-cols-2 lg:grid-cols-4 gap-6 my-7 px-2">
               

{showAllProducts
            ? filteredProducts.map((trendenciProduct) => (
                <div
                  key={trendenciProduct._id}
                  className="rounded overflow-hidden shadow-lg flex flex-col my-5"
                >
                    <div className="relative"><p href="#">
                        <img className="w-full"
                            src={trendenciProduct.img}
                            alt="Sunset in the mountains" />
                        <div
                            className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                        </div>
                    </p>
                        <p href="#!">
                            <div
                                className="text-xs absolute top-0 right-0 bg-slate-500 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-slate-600 transition duration-500 ease-in-out">
                                ${trendenciProduct.price}
                            </div>
                        </p>
                    </div>
                    <div className=" px-4 my-3">
                        <h2>{trendenciProduct.name}</h2>

                    </div>
                </div>
              ))
            : filteredProducts.slice(0, 8).map((trendenciProduct) => (
                <div
                  key={trendenciProduct._id}
                  className="rounded overflow-hidden shadow-lg flex flex-col my-5"
                >
                    <div className="relative"><p href="#">
                        <img className="w-full"
                            src={trendenciProduct.img}
                            alt="Sunset in the mountains" />
                        <div
                            className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                        </div>
                    </p>
                        <p href="#!">
                            <div
                                className="text-xs absolute top-0 right-0 bg-slate-500 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-slate-600 transition duration-500 ease-in-out">
                                ${trendenciProduct.price}
                            </div>
                        </p>
                    </div>
                    <div className=" px-4 my-3">
                        <h2>{trendenciProduct.name}</h2>

                    </div>
                </div>
              ))}
        </div>
            </div>

            <div className="text-center">
            {!showAllProducts && (
          <button className="bg-slate-600 text-white py-2 px-4 text-xl rounded-sm"
          onClick={handleShopNow}>
             See More
          </button>
            
        )}
          </div>
          </div>


        
    );
};

export default TrendingProducts;