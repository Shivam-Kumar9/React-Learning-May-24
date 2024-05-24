import { useState } from "react";
import axios from "axios";
import { LoadingIndicator } from "./loading-indicator";
import { ErrorIndicator } from './error-indicator';

{/*function ProductItems(prop){
    const {item} = prop;
    const {  price, cateory, description, image } = item;
    console.log(price)
    return <div>
        <h2> hi</h2>
        </div>
}*/}
// this a old method and long like wraping product in object then  do it like upper 
function ProductItems({image, title, price, description, category}){
    
  
    console.log(price)
    return <div style={{padding:"10px", margin:"10px", border:"2px solid"}}>
        <img src={image} alt="product" width={200} height={200}/>
        <h3>{title}</h3>
        <p><b>Price :- </b>{price}$</p>
        <p><b>Category :-</b> {category}</p>
        {/* <p>{description}</p> */}
        </div>
}
function Products(){
     const [loading,setLoading] = useState(false)
     const [products,setProducts]= useState([]);
     const [error,setError] = useState(false)

     async function fetchUpdateData(){
        setLoading(true)
        try{
         let res = await axios({
            method :"get",
            url : "https://fakestoreapi.com/products" 
        })
         let productsData = res?.data;
         setLoading(false)
         setProducts(productsData)
         //console.log(productsData);
        }
        catch(error){
         setError(true)
         setLoading(false)

        }
     }
     if(loading){
        return(<LoadingIndicator/>)
     }
     if(error){
        return(<ErrorIndicator/>)
     }
    return<div>
    <h1>products list</h1>
    <button onClick={fetchUpdateData}>CLICK BTN to get products</button>
    {/*
        products.map((product)=>(<ProductItems item={product} key={product?.id}/>))
     this is can be more shorter just use spred operator in  comp tag 
     */}
     {
         products.map((product)=>(<ProductItems {...product} key={product?.id}/>))
     }
    </div>
}

export {Products} 