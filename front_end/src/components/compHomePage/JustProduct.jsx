import React, { useEffect, useRef, useState } from "react";
import "./justProduct.css";
import {motion} from 'framer-motion'
import ProductCard from "../card/Card";
import {JustProductDB} from '../../JustProductDB'
const JustProduct = () => {
  const carouselRef = useRef();
  const [width,setWidth]=useState(0)
  const [animationCount,setAnimationCount]=useState(0)
  const [animation,setAnimation]=useState()
  useEffect(()=>{
      setAnimation(carouselRef.current.offsetWidth)
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth) 
    },[])
    const nextSlide = ()=>{

      setAnimationCount( -animationCount < animation +400? animationCount-100: animationCount)
    }
    const previousSlide = ()=>{
      setAnimationCount( animationCount<0 ? animationCount+100:animationCount)
    }
  return (
    <div className="margin-y just-product">
      <div className="d-flex  justify-content-between">
        <h1 className="c-first fontApp mb-5 fs_40">-just product:-</h1>
        <div className="d-flex gap-4 align-items-center">
          <button className="btn-icon" onClick={()=>previousSlide()}><img className="icon-gif" src="/IMG/icon/icons8-previous-64.png"/></button>
          <button className="btn-icon" onClick={()=>nextSlide()}><img className="icon-gif" src="/IMG/icon/icons8-next-64.png"/></button>
        </div>
      </div>
      
      <div className="d-flex align-items-center gap-4">
      <motion.div ref={carouselRef} className="carousel" whileTap={{cursor:"grabbing"}}>
        <motion.div className="inner-carousel" drag="x" animate={{x:animationCount}} dragConstraints={{right:0,left:-width}}>
          {
            JustProductDB.map((data,index)=>(
            <motion.div key={index} className="item">
              <ProductCard data={data} />
            </motion.div>
            // console.log(data)
            ))
            
          }      
        </motion.div>
      </motion.div>
      </div>


    </div>
  );
};

export default JustProduct;
