const Header = ({addedCart,balance})=>
    {
       return (
            <header className='fixed top-0 left-1/2 w-full transform -translate-x-1/2 bg-slate-300/80 max-w-7xl backdrop-blur-md shadow-md flex justify-between items-center m-auto px-4 py-4'>
                <h1 className='text-6xl text-red-600'>Logo</h1>
                <div className='flex gap-4'>
                    <a className='text-3xl text-blue-900 font-bold' href="">Home</a>
                    <a className='text-3xl text-blue-900 font-bold' href="">Product</a>
                    <a className='text-3xl text-blue-900 font-bold' href="">Cart: {addedCart.length}</a>
                    <a className='text-3xl text-blue-900 font-bold' href="">${balance.toFixed(2)}</a>
                </div>
            </header>
       )
    }
export default Header;