import React from 'react'
import { Decoration,Loginfo,Container,Fullscreen,Imacos,Already,ContFormreg,Inputt,
         Semititu,Botonform,Card,Pantalla,Imageen,Titulos, Textop} from './LoginElements'
import logo from '../Images/EBlogo.png'
import Pizarron from '../Images/pizarra.png'
import ParticlesComponent from './Anim'

const Login = () => {

  return (
  <Fullscreen>
    <Container>
        <Loginfo>
            <Imacos src={logo}/>
            <Already>¿Aun no tienes una cuenta?</Already>
            <ContFormreg>
            <Semititu>Email</Semititu>  
            <Inputt type="text" name="email" placeholder="Email"/>
            <Semititu>Contraseña</Semititu>  
            <Inputt type="password" name="password" placeholder="Contraseña"/>
            <Botonform>Iniciar sesion</Botonform>
            </ContFormreg>
        </Loginfo>
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

export default Login