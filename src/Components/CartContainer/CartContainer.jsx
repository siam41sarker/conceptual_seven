import About from "../About/About";
import Cart from "../Cart/Cart";

const CartContainer = ({handleIsActive,isActive,addedCart,handleDelete}) =>{
    return (
        <div className='pt-4 pr-4 pb-4'>
            <h1 className='text-5xl'>No. of Selected Cart: {(addedCart.length<10)?'0'+addedCart.length:addedCart.length}</h1>
            <div className='flex justify-between'>
                <button onClick={()=>handleIsActive('cart')} className={`${(isActive.cart)?'px-8 mt-4 text-2xl  text-white rounded-xl font-bold py-4 bg-blue-700':'px-8 mt-4 text-2xl'}`}>Cart</button>
                <button onClick={()=>handleIsActive('history')} className={`${(isActive.cart)?'px-8 mt-4 text-2xl':'px-8 mt-4 text-2xl  text-white rounded-xl font-bold py-4 bg-blue-700'}`}>History</button>
            </div>
            <div className="mt-4 text-2xl">
                {(isActive.cart)?<Cart showCart={addedCart}handleDelete={handleDelete}></Cart>:<About showCart={addedCart}></About>}
            </div>
        </div>
    );
}

export default CartContainer;