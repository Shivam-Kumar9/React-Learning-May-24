 

function ProductItems({id, image, title, price, description, category}){
    
  
    
    return <div style={{padding:"10px", margin:"10px", border:"2px solid"}}>
        <h4>ID - {id}</h4>
        <img src={image} alt="product" width={200} height={200}/>
        <h3>{title}</h3>
        <p><b>Price :- </b>{price}$</p>
        <p><b>Category :-</b> {category}</p>
        {/* <p>{description}</p> */}
        </div>
}

export {ProductItems}