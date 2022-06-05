import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styled from 'styled-components'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


const Conteiner = styled.div`
display: flex;
flex-direction: column;
align-items: center ;
justify-content:  center;
padding: 10px ;
`

const StackConteiner = styled(Stack)`
float: left;
position: absolute;
margin-left: 600px;
`

function SearchBox() {

    return (
        <Conteiner>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '500px' },
                    }}
                    noValidate
                    autoComplete="off">
                    <TextField id="outlined-basic" variant="outlined" sx={{
                        '& > :not(style)': { height: '40px' },
                    }} />

                </Box>
                <StackConteiner spacing={2} direction="row" >
                    <Button variant="outlined" >Buscar</Button>
                </StackConteiner>
        </Conteiner>

    )

}

export default SearchBox