import React, {useRef,useState} from 'react'
import {Fullscreen,Sidebar,Imaherr,Picker,Boardcont, Topbar, Circletop,
        Imatop,Sidebaar, Pinceld, Gomad, Imgdiv, Figurasd,Downbut} from './PizarronElements'
import Pincel from '../Images/pincel.png'
import logo from '../Images/EBlogo.png'
import Goma from '../Images/goma.png'
import Figuras from '../Images/figuras.png'
import Canvas from './Canvas'


const BoardMain = () => {
  const[selectedColor, setSelectedColor] = useState("#000000");
  const maincanvasRef =  document.getElementById("Maincanvas");
 
  const handleDownload = evt =>{
   console.log(maincanvasRef);
  } 

  return (
  <Fullscreen>
    <Topbar>
      <Circletop><Imatop src={logo}/></Circletop>
    </Topbar>
   
    <Downbut id="btnDescargar"  onClick={handleDownload}>
      Descargar
    </Downbut>

    <Sidebar>
     <Sidebaar>
     <Pinceld>
      <div className="color-picker-container">
       <Picker 
          value={selectedColor}
          type="color" 
          onChange={(e)=>setSelectedColor(e.target.value)} />
        </div>
          <Imgdiv>
            <Imaherr src={Pincel}/>
          </Imgdiv>
      </Pinceld>

      
      <Gomad value={selectedColor}
          type="color" 
          onClick={(e)=>setSelectedColor("white")} src={Goma}>
        <Imgdiv>
          <Imaherr src={Goma}/>
        </Imgdiv>
      </Gomad>

      <Figurasd>
        <Imgdiv>
          <Imaherr src={Figuras}/>
        </Imgdiv>
      </Figurasd>

      </Sidebaar>
     

      
    </Sidebar>
    <Boardcont>
      <Canvas
           id="Maincanvas"
           width={799}
           height={460}
           colorp={selectedColor} />
    </Boardcont>
    </Fullscreen>
  )
}

export default BoardMain