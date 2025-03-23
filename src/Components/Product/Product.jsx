const Product = ({ product,handleSelectedProduct}) => {
  const { id, name, image, description, price, isfeature } = product;
  return (
    <div className="bg-slate-100 rounded-2xl w-[400px] mt-5 p-5 text-center shadow-lg shadow-slate-800">
      <img className="w-full rounded-xl" src={image} />
      <h1 className="mt-5 font-bold text-3xl">{name}</h1>
      <p className="mt-4 text-lg text-slate-950">{description}</p>
      <p className="mt-4 text-xl font-semibold">${price}</p>
      <p className="mt-2 text-xl font-semibold">{isfeature ? "Featured Product." : "Not Featured."}</p>
      <button onClick={()=>handleSelectedProduct(product)} className="mt-4 bg-slate-300 border border-solid border-slate-200 rounded-lg text-green-600 py-3 px-6 font-bold text-xl ">Add to Cart</button>
    </div>
  );
};

export default Product;
