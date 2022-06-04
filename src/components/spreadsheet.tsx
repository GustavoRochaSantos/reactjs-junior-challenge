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

const StyledStack = styled(Stack)`
float: right: ;
`




function Spreadsheet() {

    return (
        <Conteiner>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '500px'},
                    }}
                    noValidate
                    autoComplete="off">
                    <TextField id="outlined-basic" variant="outlined"  sx={{
                        '& > :not(style)': { height: '40px' },
                    }}/>

                </Box>
                <Stack spacing={2} direction="row" marginLeft={80} marginTop={-6}>
                    <Button variant="outlined" >Buscar</Button>
                </Stack>
        </Conteiner>

    )

}

export default Spreadsheet