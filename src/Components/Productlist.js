import React, { useState } from 'react'

 const ProductList= ()=> {
    const [cart , setCart] =useState([])
    const products=[
        {id:1,name:'Pawan', age:20,mobile:1234567865},
        {id:2,name:'Girish', age:26,mobile:1234598865},
        {id:3,name:'Ganesh', age:22,mobile:12567867865},
    ]
    const addToCart=(product)=>{
   setCart((prevCart)=>[...prevCart,product]);
   
    }
    const removePersons = (id) => {
        setCart(prevCart => {
          let removed = false;
          return prevCart.filter(item => {
            if (item.id === id && !removed) {
              removed = true;
              return false;
            }
            return true; 
          });
        });
      };
      
    // const removePersons = (id) => {
    //     setCart((prevCart) => {
         
    //       const indexToRemove = prevCart.findIndex(item => item.id === id);
    //       if (indexToRemove !== -1) {
    //         return prevCart.slice(0, indexToRemove).concat(prevCart.slice(indexToRemove + 1));
    //       }
    //       return prevCart;
    //     });
    //   };
    // function counter(){
    //     const [count, setCount]=useState(0)
    //     document.getElementById('btn1')=()=>setCount(count +1)
    //     document.getElementById('btn2')=()=>setCount(count -1)
    // }
   
    

  return (
    <div className='main'>
      <div>
        <h1>Persons List</h1>
      <ul className='list'>
        {products.map((product)=>
            <li key={product.id}>NAME:-{product.name}<br/>AGE:-{product.age}<br/>MOBILE:-{product.mobile}<br/>
            <button onClick={()=>addToCart(product)} id='btn1'>Add Person</button>
            </li>
            
        )}
      </ul>
      </div>
      <div>
      <ul className='list1'>
        
        <h1>Added Presons</h1>
        
        {cart.map((item,index)=>(
            <li key={index}>NAME:-{item.name}<br/>AGE:-{item.age}<br/>MOBILE:-{item.mobile}<br/>
            <button onClick={()=>removePersons(item.id)} id='btn2'>Remove</button>
            </li>
        ))}
      </ul>
      </div>
    </div>
  )
}

export default ProductList;
