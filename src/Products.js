import React from 'react'
import ProductsS from "./Productss.js"

export default function Products() {
  const products = [
    {id:1,title:'product one',desc:'this is product one', price:'$200'},
    {id:2,title:'product two',desc:'this is product two',price:'$3500'},
    {id:3,title:'product three',desc:'this is product three',price:'$400'},
];
  return (
   
    <div className='row'>
       {products.map((element)=>{
        return <ProductsS {...element}  Key={element.id}/>
       })}
        </div>
       



   
      
  
  )
}
