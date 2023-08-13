import React, { useState } from 'react'
import './A.css'
function A() {


   const [color,setcolor]= useState({bgColor:"white", color:"black"})
   
   const changetheme = () =>{
    if (color.color==="black"){
        setcolor({bgColor:"black", color:"white"})
    }
    else {
        setcolor({bgColor:"white", color:"black"})
    }
}
 
 
 
 
   return (
    <div className='whole' style={{backgroundColor:color.bgColor}}>
            <div className='top'>
                <h1 style={{color:color.color}}>Overreacted</h1> 
                <button onClick={changetheme} ><p style={{color:color.bgColor}}>Toggle</p></button>
            </div>

            <div className='first'>
                <h1>The WET Codebase</h1>
                <p style={{color:color.color}}> sunday 4th, 2020 11 min read</p>
                <p style={{color:color.color}}>come waste your time with me</p>
            </div>

            <div className='second'>
                <h1>Goodby, Clean Code</h1>
                <p style={{color:color.color}}> Friday 22nd, 2019 5 min read</p>
                <p style={{color:color.color}}>Let clean code guide you. Then let it go.</p>
            </div>


            <div className='third'>
                <h1>My Decade In Review</h1>
                <p style={{color:color.color}}> Saturday 11th, 2018 5 min read</p>
                <p style={{color:color.color}}>A personal reflection.</p>
            </div>

            <div className='fourth'>
                <h1>What Are The React Team Principles</h1>
                <p style={{color:color.color}}> Thursday 4th, 2015 5 min read</p>
            </div>

    </div>
  )
}

export default A