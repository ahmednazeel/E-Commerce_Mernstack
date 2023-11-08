import React from 'react'
import ProductCard from '../card/Card'

const BestSeller = () => {
    const pestseller = [
        {
            id:1,
            Image:"/IMG/Paste image (6).png",
            proDesc:"96 Nuptse Dip Dye Korea Puffers Jacket",
            rating:5,
            price:"$500"
        },
        {
            id:2,
            Image:"/IMG/Paste image (5).png",
            proDesc:"Paradigm Chilliwack Black Label Jacket",
            rating:4,
            price:"$400"
        },
        {
            id:3,
            Image:"/IMG/Paste image.png",
            proDesc:"1996 Retro Nuptse Jacket in Black",
            rating:4,
            price:"$500"
        },
        {
            id:4,
            Image:"/IMG/Paste image (14).png",
            proDesc:"Paul Quilted Nylon Puffer bomber jacket",
            rating:3,
            price:"$300"
        },
        {
            id:5,
            Image:"/IMG/Paste image (2).png",
            proDesc:"Chilliwack jacket Bomber HUMANATURE",
            rating:5,
            price:"$500"
        },
        {
            id:6,
            Image:"/IMG/Paste 4.png",
            proDesc:"96 Nuptse Dip Dye Korea Puffers Jacket",
            rating:5,
            price:"$500"
        },
        {
            id:7,
            Image:"/IMG/Paste image (17).png",
            proDesc:"96 Nuptse Dip Dye Korea Puffers Jacket",
            rating:4,
            price:"$200"
        },
        {
            id:8,
            Image:"/IMG/Paste image (16).png",
            proDesc:"96 Nuptse Dip Dye Korea Puffers Jacket",
            rating:5,
            price:"$400"
        },
    ]


    return (
    <div className='margin-y'>
        <h1 className="c-first fontApp mb-5 fs_40">-just product:-</h1>
        <div className='d-flex align-items-start justify-content-around flex-wrap'>
        {
            pestseller.map((data,index)=>(
              <ProductCard clicking key={index} data={data}/>
            ))
            
        }
        </div>   
    </div>
  )
}

export default BestSeller