import React from 'react'
import { Decoration,Reginfo,Container,Fullscreen,Imacos,Already,ContForm,Inputt,
         Semititu,Botonform,Card,BtnLink,Linkbtn,Imageen,Titulos, Textop} from './RegistroElements'
import logo from '../Images/EBlogo.png'
import Pizarron from '../Images/pizarra.png'
import ParticlesComponent from './Anim'


const Registro = () => {

  return (
  <Fullscreen>
    <Container>
        <Reginfo>
            <Imacos src={logo}/>
            <Already>¿Ya tienes cuenta?<Linkbtn href='/login'>Inicia Sesion</Linkbtn></Already>
            <ContForm>
            <Semititu>Nombre*</Semititu>  
            <Inputt type="text" name="name" placeholder="Nombre"/>
            <Semititu>Apellido Paterno*</Semititu>  
            <Inputt type="text" name="lastnamep" placeholder="Apellido Paterno"/>
            <Semititu>Apellido Materno*</Semititu>  
            <Inputt type="text" name="lastnamem" placeholder="Apellido Materno"/>
            <Semititu>Email*</Semititu>  
            <Inputt type="text" name="email" placeholder="Email"/>
            <Semititu>Contraseña*</Semititu>  
            <Inputt type="password" name="password" placeholder="Contraseña"/>
            <Semititu>Confirmar Contraseña*</Semititu>  
            <Inputt type="password" name="repassword" placeholder="Confirmar Contraseña"/>
            <Botonform>Crear Cuenta</Botonform>
            </ContForm>
        </Reginfo>
        <Decoration>
          <ParticlesComponent />
          <Card> <Titulos>E-Board Colaborativo</Titulos>
          <Textop>Un aliado para gestionar tus clases, comunicarte con tus estudiantes y permitir que colaboren</Textop>
          <Imageen src={Pizarron}/>
          </Card>
        </Decoration>
    </Container>
  </Fullscreen>
    
  
  )
}

export default Registro