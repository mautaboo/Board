import React from 'react'
import { Caanvas, Sketch } from './PizarronElements'
import io from "socket.io-client"
import { useState } from 'react';
import { useEffect } from 'react';
import "./Board.css";


const Boardi = ({color}) => {
  console.log(color);
   const[socket, setSocket] = useState();
   const[imageData, setImageData] = useState(null)
   let timeout;

   useEffect(()=>{
      const s = io("http://localhost:5000");
      setSocket(s)

      return ()=>{
        s.disconnect();
      }
   },[]);

   useEffect(()=>{
    drawOnCanvas();
    if(imageData){
      let image = new Image();
      let canvas = document.querySelector("#board");
      let ctx = canvas.getContext("2d");
      image.onload=()=>{
        ctx.drawImage(image,0,0);
      }
      image.src=imageData;
    }
   },[color])
 
   const drawOnCanvas = () =>{
    let canvas = document.querySelector("#board");
    let ctx = canvas.getContext("2d");

    let sketch = document.querySelector("#sketch");
    let sketch_style = getComputedStyle(sketch);
    canvas.width = parseInt(sketch_style.getPropertyValue("width"));

    let mouse = {x:-800,y:0};
    let last_mouse = {x:0,y:0};

    canvas.addEventListener("mousemove",function(e){
      last_mouse.x = mouse.x;
      last_mouse.y = mouse.y;

      mouse.x = e.pageX - this.offsetLeft;
      mouse.y = e.pageY - this.offsetTop;
      console.log({x: mouse.x, y : mouse.y});
    },false)
    
    ctx.linewidth=5;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.strokeStyle=color;
    
    canvas.addEventListener("mousedown",(e)=>{
      canvas.addEventListener("mousemove",onPaint,false)
     },false)

     canvas.addEventListener("mouseup",(e)=>{
      canvas.removeEventListener("mousemove",onPaint,false);
     },false)

    const onPaint = ()=>{
      ctx.beginPath();
      ctx.moveTo(last_mouse.x,last_mouse.y);
      ctx.lineTo(mouse.x,mouse.y);
      ctx.closePath();
      ctx.stroke();
      if(timeout!==undefined){
        clearTimeout(timeout)
      }
      timeout = setTimeout(()=>{
        let base64ImageData = canvas.toDataURL("image/png");
        setImageData(base64ImageData);
      },1000)
    }
  }

    return (
      <div id="sketch" className='sketch'>
        <canvas className='board' id="board"/>
      </div> 

  );
};

export default Boardi;