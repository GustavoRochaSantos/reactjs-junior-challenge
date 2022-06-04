import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import logo from '../assets/logo.png'
import styled from 'styled-components'

const StyledToolbar = styled(Toolbar)`
    background: white;
`;

const StyledTypography = styled(Typography)`
color: black ;
font-weight: bold;
`;

function Header (){

    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" >
          <StyledToolbar>
              <img src={logo}/>
            <StyledTypography align="center" variant="h4" sx={{ flexGrow: 1 }}>
              Frontend Challenge
            </StyledTypography>
          </StyledToolbar>
        </AppBar>
      </Box>    )

}

export default Header


