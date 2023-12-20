import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
class Carousel extends Component {

    constructor(){
        super()

        this.state={
            index:0
        }
    }
  
    handleBackArrow=()=>{
        if(this.state.index==0){
            this.setState({
                index:images.length-1
            })
        }else{
            this.setState({
                index:this.state.index-1
            })
        }
        
    }

    handleForwardArrow=()=>{
        if(this.state.index==images.length-1){
            this.setState({
                index:0
            })
        }else if(this.state.index<images.length-1){
            this.setState({
                index:this.state.index+1
            })
        }
        
    }

    render(){
        return(
            <>
                <img className="carousel-img" src={images[this.state.index].img} alt=""/>
                <h1 className="carousel-title">{images[this.state.index].title}</h1>
                <h2 className="carousel-sub-title">{images[this.state.index].subtitle}</h2>
                <ArrowBackIosIcon className="box Back-arr" onClick={this.handleBackArrow}/>
                <ArrowForwardIosIcon className="box Front-arr" onClick={this.handleForwardArrow}/>
            </>
        )
    }
}

export default Carousel;