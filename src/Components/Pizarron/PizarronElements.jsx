//Importado de componentes
import styled from 'styled-components'
import { Link } from 'react-router-dom';


export const Fullscreen = styled.div`
height: 100vh;
background-color: #E8E8E8;
`
//Contenedor Principal
export const Container = styled.div`
display: grid;
grid-template-columns: repeat(2, 2fr);
grid-gap: 10px;
height: 100%;
overflow: hidden;
grid-auto-rows: minmax(100px, auto);
  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`
export const Sidebaar = styled.div`
 border-radius: 20px;
 display: grid;
 grid-template-columns: repeat(1, 2fr);
 grid-gap: 20px;
 height: 100%;
 overflow: hidden;
 grid-template-columns: 40px;
 grid-template-rows: repeat(6, 40px);
 grid-auto-rows: minmax(50px, auto);
  @media screen and (max-width: 45px) {
    padding: 10px;
  }
`

//Contenedor Herramientas
export const Sidebar = styled.div`
 height: 400px;
 width: 60px;
 border-radius: 20px;
 background-color: white;
 position: relative;
 padding: 10px;
 box-shadow: 10px 5px 5px #bbbbbb ;
 top: 15%;
 left: 3%;
`

export const Topbar = styled.div`
 height: 40px;
 width: 400px;
 border-radius: 20px;
 background-color: white;
 position: relative;
 padding: 5px;
 box-shadow: 10px 5px 5px #bbbbbb ;
 top: 3%;
 left: 3%;
`
export const Dashbar = styled.div`
 height: 40px;
 width: 200px;
 border-radius: 20px;
 background-color: #b6d7f5;
 position: absolute;
 padding: 5px;
 box-shadow: 10px 5px 5px #bbbbbb ;
 top: 3%;
 left: 80%;
`
export const Downbut = styled.button`
 height: 30px;
 width: 150px;
 border-radius: 20px;
 border-color: transparent;
 background-color: #A6D5F7;
 color: #ECECEC;
 
 font-family: 'Lato', sans-serif;
 font-size: 20px;
 text-align: center;
 position: absolute;
 box-shadow: 10px 5px 5px #bbbbbb ;
 top: 3%;
 left: 80%;
 
 :hover{
  background-color: #A7F7A6;
  color:#FFE948;
 }
`

//Contenedores imagenes herramientas
export const Pinceld = styled.div`
 height: 40px;
 width: 40px;
 border-radius: 20px;
 display:block;
 background-color: transparent;
 grid-row: 1;
 `

 export const Gomad = styled.div`
 height: 40px;
 width: 40px;
 border-radius: 20px;
 display:block;
 background-color: #f9f9f9;
 grid-row: 2;

 :hover{
  background-color: #019FAF;
 }

 `
 export const Figurasd = styled.div`
 height: 40px;
 width: 40px;
 border-radius: 20px;
 display:block;
 background-color: #f9f9f9;
 grid-row: 3;

 :hover{
  background-color: #019FAF;
 }

 `


 export const Circletop = styled.div`
 height: 28px;
 width: 40px;
 border-radius: 20px;
 background-color: transparent;
 overflow:hidden;
 display:block;
 position: absolute;
 bottom:1;
 `

 //Imagenes herramientas
export const Imaherr = styled.img`
width: 26px;
height: 26px;
`
export const Imgdiv = styled.div`
height: 40px;
width: 40px;
pointer-events: none;
user-select: none;
position:absolute;
display: flex;
justify-content: center;
align-items: center;
`

export const Imagom = styled.img`
width: 28px;
height: 28px;
position: absolute;
margin: auto;
`

export const Imatop = styled.img`
width: 37px;
height: 37px;
transform: translate(-5%, -5%);
`


 //Imagenes herramientas
 export const Picker = styled.input`
 -webkit-appearance: none;
 -moz-appearence: none;
 appearance: none;
 height: 40px;
 width: 40px;
 background-color: transparent;
 border: none;
 cursor: pointer;
 position: absolute;

  ::-webkit-color-swatch{
    border-radius: 20px;
    border: none;
  }

  ::-moz-color-swatch{
    border-radius: 20px;
    border: none;
  }
 `

 export const Gomaa = styled.input`
 -webkit-appearance: none;
 -moz-appearence: none;
 appearance: none;
 height: 40px;
 width: 40px;
 background-color: transparent;
 border: none;
 cursor: pointer;
 position: absolute;

  ::-webkit-color-swatch{
    border-radius: 20px;
    border: none;
  }

  ::-moz-color-swatch{
    border-radius: 20px;
    border: none;
  }
 `

 export const Boardcont = styled.div`
 height: 460px;
 width: 800px;
 position: absolute;
 top: 14%;
 left: 20%;
 background-color: white;
 box-shadow: 10px 5px 5px #bbbbbb ;
  }
 `

 export const Sketch = styled.div`
 height: 100%;
 width: 100%;
  }
 `

 export const Caanvas = styled.canvas`
 height: 100%;
 width: 100%;
  }
 `