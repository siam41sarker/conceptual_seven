const Cart =({showCart,handleDelete}) =>{
    return (
        <div className="w-full border border-solid border-slate-300 bg-slate-200 shadow-lg shadow-blue-600/50 p-6  rounded-2xl ">
            {showCart.map(p=>
                <div key={p.id} className="w-full mt-5 p-6 border border-solid border-slate-800 rounded-xl flex gap-5 items-center">
                        <img className="w-[50px] rounded-lg" src={p.image} />
                        <h1 className="text-purple-800 text-2xl font-bold">{p.name}</h1>
                        <button onClick={()=>handleDelete(p)} className="p-4 bg-slate-700 text-white rounded-lg">Delete</button>
                </div>
            )}
        </div>
    );
}

export default Cart;