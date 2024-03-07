import { useState,useEffect,useRef } from "react";
import MediaQuery from "react-responsive";
import ToolBar from "./ToolBar";


function App() {
  const canvasRef=useRef(null)
const ctxRef=useRef(null);
const [isDrawing,setIsDrawing]=useState(false);
const [lineWidth,setLineWidth]=useState(1);
const [lineColor,setLineColor]=useState("#000000");




useEffect(()=>{
  const canvas=canvasRef.current;
  const ctx=canvas.getContext("2d");
  ctx.lineCap="raund";
  ctx.lineJoin="round";
  ctx.strokeStyle=lineColor;
  ctx.lineWidth=lineWidth;
  ctxRef.current=ctx;

},[lineWidth,lineColor])

const startDrawing=(e)=>{
  ctxRef.current.beginPath();
  ctxRef.current.moveTo(e.nativeEvent.offsetX,e.nativeEvent.offsetY);
  setIsDrawing(true)
}
const endDrawing=(e)=>{
  ctxRef.current.closePath();
  setIsDrawing(false);
}

const draw=(e)=>{
  if(!isDrawing){
    return
  }
  ctxRef.current.lineTo(e.nativeEvent.offsetX,e.nativeEvent.offsetY)
  ctxRef.current.stroke();
}

const ClearCanva=()=>{
  ctxRef.current.clearRect(0,0,canvasRef.current.width,canvasRef.current.height)
}

window.onmouseup=()=>{
  setIsDrawing(false)
}

  return (
    <div className="container">
      <h1 className="header">Paint App</h1>
      <div className="drawArea">
      <ToolBar lineWidth={lineWidth}
       setLineColor={setLineColor}
       setLineWidth={setLineWidth} ClearCanva={ClearCanva} lineColor={lineColor}/>

       <MediaQuery minWidth={801}>
         <canvas className="Canva"  ref={canvasRef} width={'800px'} height={'600px'} 
         onMouseDown={startDrawing} onMouseUp={endDrawing} onMouseMove={draw} />
         </MediaQuery>

         <MediaQuery minWidth={401} maxWidth={800}>
         <canvas className="Canva"  ref={canvasRef} width={'400px'} height={'400px'} 
         onMouseDown={startDrawing} onMouseUp={endDrawing} onMouseMove={draw} />
         </MediaQuery>

         <MediaQuery minWidth={350} maxWidth={400}>
         <canvas className="Canva"  ref={canvasRef} width={'350px'} height={'400px'} 
         onMouseDown={startDrawing} onMouseUp={endDrawing} onMouseMove={draw} />
         </MediaQuery>

         <MediaQuery minWidth={0} maxWidth={350}>
         <canvas className="Canva"  ref={canvasRef} width={'200px'} height={'400px'} 
         onMouseDown={startDrawing} onMouseUp={endDrawing} onMouseMove={draw} />
         </MediaQuery>

        
      </div>
      
    </div>

  );
}

export default App;
