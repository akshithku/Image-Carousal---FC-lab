import React, { useState, } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
function Carousel()  {
   const[img,set]=useState(0)
   const random=()=>{
        if(img<2){
            set(img+1);
        }
        else{
            set(0)
        }
    }
   const back=()=>{
        if(img>0){
            set(img-1);
        }
        else{
            set(2);
        }
    }
    
        return(
            <div className="container">
                 <div id="backicon">
                < ArrowBackIosIcon className="back" onClick={back}/>
                </div>
                <h1 className="title">{images[img].title}</h1>
                <img className="img" src={images[img].img} alt=''/>
                <p className="para">{images[img].subtitle}</p>
                <div id="nexticon">
                < ArrowForwardIosIcon className="front" onClick={random} />
                </div>
            </div>
        )
}

export default Carousel;
