const getFromLS = ()=>
    {
        const getStr = localStorage.getItem('cart');
        if(getStr)
            return JSON.parse(getStr);
        else
            return [];
    }
const saveToLS = id =>
    {
        const cart = getFromLS();
        if(!cart.includes(id))
            cart.push(id);
        addToLS(cart);
    }
const addToLS = cart =>
    {
        const cartStr = JSON.stringify(cart);
        localStorage.setItem('cart',cartStr)
    }
const removeFromLS = id =>
        {
            const cartValue = getFromLS();
            const remainingCart = cartValue.filter(cartID=>cartID!==id)
            addToLS(remainingCart);
        }
const getBalanceFromLS = ()=>
    {
        const getBalanceStr = localStorage.getItem('balance');
        return (getBalanceStr)?JSON.parse(getBalanceStr):3273;
    }
const saveBalanceToLS = balanceData =>
    {
        const balanceStr = JSON.stringify(balanceData);
        localStorage.setItem('balance',balanceStr);
    }
export {saveToLS,getFromLS,removeFromLS,getBalanceFromLS,saveBalanceToLS};