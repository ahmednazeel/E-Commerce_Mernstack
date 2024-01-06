import React, { useEffect, useState } from 'react'
import ProductCard from '../card/Card'
import axios from "axios"
const BestSeller = () => {
    
    const [products,setProducts] = useState([])

    useEffect(()=>{
        (async function (){
            const {data} = await axios("http://localhost:5000/api/products")
            setProducts(data)
        })()
        console.log(products);
    }, [])
    
    return (
    <div className='margin-y'>
        <h1 className="c-first fontApp mb-5 fs_40">-best seller:-</h1>
        <div className='d-flex align-items-start justify-content-around flex-wrap'>
        {
           products.length>0 && products.map((data,index)=>(
              <ProductCard clicking key={index} data={data}/>
            ))
            
        }
        </div>   
    </div>
  )
}

export default BestSeller