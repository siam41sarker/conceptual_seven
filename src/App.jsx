import {useState} from "react";
import "./App.css";
import AllProducts from "./Components/AllProducts/AllProducts";
import CartContainer from "./Components/CartContainer/CartContainer";
import Header from "./Components/Header/Header";
import { ToastContainer,toast} from "react-toastify";
import { getBalanceFromLS, removeFromLS, saveBalanceToLS, saveToLS } from "./Utilities/local";
function App() {
  const [isActive,setIsActive] = useState({
    cart:true,
    status:'cart'
  })
  const handleIsActive = status =>
      {
          if(status === 'cart')
              {
                  setIsActive(
                      {
                         cart:true,
                         status:'cart'
                      }
                  )
              }
            else
              {
                  setIsActive(
                      {
                          cart:false,
                          status:'history'
                      }
                  )
              }
      }
  const [selectedProduct,setSelectedProduct] = useState([]);
  const [balance,setBalance] = useState(getBalanceFromLS);
  const handleSelectedProduct = (product) =>
      {
        
          const availableProduct = selectedProduct.find(p=>p.id===product.id);
          if(availableProduct)
              {
                  toast.error('Already Added!',{
                      position:'top-center',
                      style:{
                        width:'300px',
                        fontSize:'20px'
                      }
                  })
              }
          else
              {
                  if(balance<product.price)
                      {
                          toast.error('Insufficient Balance!',{
                            position:'top-center',
                            style:{
                              width:'300px',
                              fontSize:'20px',
                            }
                          })
                      }
                    else
                      {
                        toast.success('Successfully Added To The Cart',{
                          position:'top-center',
                          style:{
                            width:'300px'
                          }
                        })
                        const newBalance = balance-product.price;
                        setBalance(newBalance);
                        saveBalanceToLS(newBalance)
                        const updatedProduct = [...selectedProduct,product];
                        setSelectedProduct(updatedProduct);
                        saveToLS(product.id);
                      }
              }
      }
  const handleDelete = prdct =>
      {
          const afterDeletion = selectedProduct.filter(selectPro=>selectPro.id!==prdct.id);
          console.log("After: ",afterDeletion)
          const newBalance = balance+prdct.price;
          setBalance(newBalance);
          saveBalanceToLS(newBalance);
          setSelectedProduct(afterDeletion);
          removeFromLS(prdct.id);
      }
      
  return (
    <>
      <Header addedCart={selectedProduct} balance={balance}></Header>
      <div className="bg-slate-200 pt-10 mt-[60px] max-w-7xl flex justify-between m-auto">
          <AllProducts handleSelectedProduct={handleSelectedProduct} setSelectedProduct={setSelectedProduct}></AllProducts>
          <CartContainer handleIsActive={handleIsActive} isActive={isActive} addedCart={selectedProduct} handleDelete={handleDelete}></CartContainer>
          <ToastContainer/>
      </div>
    </>
  );
}
export default App;
