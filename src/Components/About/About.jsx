const About = ({showCart}) =>{
    return (
        <div className="w-full border border-solid border-slate-300 bg-slate-200 shadow-lg shadow-blue-600/50 p-6  rounded-2xl">
            {showCart.map(p=>
                <div className="w-full p-4 rounded-xl border border-solid border-blue-200 mt-4">
                    <p><span className="font-bold">{p.name}</span> is added to the cart.</p>
                </div>
            )}
        </div>
    );
}

export default About;