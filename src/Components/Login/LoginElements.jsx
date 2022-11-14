//Importado de componentes
import styled from 'styled-components'

export const Fullscreen = styled.div`
height: 100vh;
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

//Contenedor de la decoracion
export const Decoration = styled.div`
  grid-column: 2;
  grid-row: 1/3;
  position: relative;
  overflow: hidden;
`

//Contenedor del los Datos de inicio/registro
export const Loginfo = styled.div`
  background-color: white;
  grid-column: 1;
  grid-row: 1/3;
  position: relative;
`

//Estilos de los Titulos por encima de los input del Formulario
export const Semititu = styled.h1`
  font-family: 'Lato', sans-serif;
  color: Black;
  font-size: 0.87rem;
  margin 0 auto;
  width: 100%;
  height: 12px;
  margin: 0.9em;
`

//Estilos de los Titulos por encima de los input del Formulario
export const Titulos= styled.h1`
  font-family: 'Lato', sans-serif;
  color: Black;
  font-size: 1.4rem;
  margin 0 auto;
  width: 100%;
  height: 12px;
  margin: 0.9em;
`

//Estilos de los Titulos por encima de los input del Formulario
export const Textop= styled.h3`
  font-family: 'Lato', sans-serif;
  color: Black;
  font-size: 0.9rem;
  margin 0 auto;
  width: 100%;
  height: 12px;
  margin: 0.9em;
`

//Estilos de los Inputs del Formulario
export const Inputt = styled.input`
  border: 0;
  border-bottom: 2px solid #38bdd9;
  border-radius: 10px;
  font-family: 'Lato', sans-serif;
  width: 100%;
  height: 2rem;
  padding: 0.25rem 0 0.25rem 0.70rem;
  font-size: .8rem;
  color: Black;
  background: #ebeff2;

  &:focus {
    outline: none;
   }
  
  &:placeholder {
    color: green;
   }
`

//Estilos del Boton del Formulario
export const Botonform = styled.button`
  margin-top: 1rem;
  border: 0;
  border-radius: 200px;
  width: 100%;
  padding: 0.85rem;
  font-size: 1rem;
  color: white;
  font-family: 'Lato', sans-serif;
  background: rgb(32,128,148);
  background: linear-gradient(90deg, rgba(32,128,148,1) 0%, rgba(56,189,217,1) 49%, rgba(17,215,255,1) 100%);
`
//Imagen del Logo
export const Imacos = styled.img`
  width: 120px;
  height: 120px;
  display:block;
  position: absolute;
  top: 5%;
  left: 5%;
transform: translate(-5%, -5%);
`

//Imagen del Logo
export const Imageen = styled.img`
  width: 100px;
  height: 100px;
  display:block;
  position: absolute;
  top: 45%;
  left: 35%;
transform: translate(-5%, -5%);
`

//Div del texto del Link a la contraparte Login/Registro
export const Already = styled.div`
  width: 150px;
  height: 150px;
  position: absolute;
  right: 5%;
  top: 10%;
`

//Estilos del Div del Formulario
export const ContFormreg = styled.div`
  width: 70%;
  height: 80%;
  position: absolute;
  right: 15%;
  top: 26%;
`

//Estilos de Card para la decoracion
export const Card = styled.div`
  background-color: white;
  border: 0;
  border-top: 3px solid #208094;
  border-radius: 10px;
  width: 330px;
  height: 280px;
  position: absolute;
  top: 35%;
  right: 25%;
  -webkit-box-shadow: 10px 7px 54px 0px rgba(0,0,0,0.92);
  -moz-box-shadow: 10px 7px 54px 0px rgba(0,0,0,0.92);
  box-shadow: 10px 7px 54px 0px rgba(0,0,0,0.92);
  margin: -20px 0 0 -20px; /* aplicar a top y al margen izquierdo un valor negativo para completar el centrado del elemento hijo */
`