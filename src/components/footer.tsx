import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import styled from 'styled-components';

const FooterConteiner = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
position: fixed;
bottom: 0;
background-color: gray;
color: white;
padding: 10px;
height: 50px
`

const ContactConteiner = styled.div`
text-align: center;
justify-content: center;
line-height: 2px;
padding: 5px;
margin-left: 20px ;
margin-right: 20px ;
`

export default function Footer() {

  return (
    <FooterConteiner>
    
    <ContactConteiner>
    <h3>Contato</h3>
    <p><b>(51) 992780681</b> </p>
    <p><b>Clarice</b></p>
    </ContactConteiner>

    <ContactConteiner>
    <h3>Nossa redes sociais</h3>
    <img src = {facebook}/>
    <img src = {instagram}/>
    </ContactConteiner>

    
    </FooterConteiner>
  );
}