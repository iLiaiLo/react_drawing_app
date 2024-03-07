import React, { useState,useRef } from 'react'


const ToolBar = ({lineWidth,setLineColor,setLineWidth,ClearCanva,lineColor}) => {

  const brushRef=useRef(null);
  const eraseref=useRef(null);
  const [text,setText]=useState("#000000")

  const SetEraser=()=>{
    setLineColor("#FFFFFF")
    eraseref.current.classList.remove("Eraser");
    eraseref.current.classList.add("Active");
    brushRef.current.classList.remove("Active");
    brushRef.current.classList.add("Brush");
  }

  const SetBrush=()=>{
    setLineColor(text)
    brushRef.current.classList.remove("Brush");
    brushRef.current.classList.add("Active");
    eraseref.current.classList.remove("Active");
    eraseref.current.classList.add("Eraser");
  }

  

  return (
    <div className='toolContainer'>
      <div className='brushTools'>
        <div>
        <label>Brush color</label>
        <input type="color" value={lineColor} style={{padding:0,margin:0}} onChange={e=>{
            setLineColor(e.target.value)
            setText(e.target.value)
        }}/>
        </div>
        <div>
        <label>Line Width</label>
        <input type="range" min="1" max="50" value={lineWidth} onChange={e=>{
            setLineWidth(e.target.value)
            }} />
        </div>
      </div>

        <div className='tools'>
        <button ref={brushRef} className="Brush" onClick={SetBrush}>Brush</button>
        <button ref={eraseref}  className="Eraser" onClick={SetEraser}>Eraser</button>
        <button className='clearCanva' onClick={ClearCanva}>Clear</button>
        </div>
    </div>
  )


}

export default ToolBar
