import React from 'react'
import { Container, Socials, Wrapper } from '../Footer/StyledFooter'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import logo from '../../images/logo.png'; 
import background from '../../images/background.jpg'

const Footer = () => {
  return (
    <Container>
        <div className='title'>
          <img src={logo} alt="logo" className='logo'/>
          <span>Doggies</span>
        </div>
        <Socials>
          <FaGithub className='social'/>
          <FaLinkedin className='social'/>
        </Socials>
        <span className='copyright'>Copyright</span>
    </Container>
  )
}

export default Footer