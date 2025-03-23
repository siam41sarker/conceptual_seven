import { useEffect, useState } from "react";
import Product from "../Product/Product";
import { getFromLS } from "../../Utilities/local";
const AllProducts = ({ handleSelectedProduct,setSelectedProduct }) => {
  const [products, setAllProducts] = useState([]);
  useEffect(() => {
    fetch("fake.json")
      .then((response) => response.json())
      .then((data) => setAllProducts(data))
      .catch((e) => console.log(e));
  }, []);
  useEffect(()=>{
    console.log(products.length);
    const newData =[];
    if(products.length)
      {
          const getLs = getFromLS();
          for(const each of getLs)
              {
                  console.log(each);
                  const selData = products.find(prod=>prod.id===each);
                  newData.push(selData)
              }
          console.log("Maramari: ",newData);
          setSelectedProduct(newData);
          console.log(products)
      }
  },[products])
  return (
    <div className="pt-4 pl-4 pb-4">
      <h1 className="text-4xl">All Available Products Are Here:</h1>
      <div className="mt-4">
        {products.map((product, idx) => (
          <Product
            product={product}
            key={idx}
            handleSelectedProduct={handleSelectedProduct}
          ></Product>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
