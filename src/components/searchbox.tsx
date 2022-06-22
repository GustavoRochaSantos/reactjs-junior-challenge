import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styled from 'styled-components'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Modal from './modal'
import Spreadsheet from "./spreadsheet";

const Conteiner = styled.div`
display: flex;
flex-direction: column;
align-items: center ;
justify-content:  center;
padding: 10px ;
`

const StackConteiner = styled(Stack)`
float: left;
margin-left: 700px;
margin-top: -45px ;
`

function SearchBox() {
    const [isModalVisible, setIsModalVisible] = useState(false)

    return (
        <Conteiner>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '350px' },
                }}
                noValidate
                autoComplete="off">
                <TextField id="outlined-basic" variant="outlined" sx={{
                    '& > :not(style)': { height: '40px' },
                }} />

            </Box>
            <StackConteiner spacing={2} direction="row" >

                <Button variant="outlined" size='small'>Pesquisar</Button>

                <Button onClick={() => setIsModalVisible(true)} variant="outlined" size='small'>Adicionar Cliente</Button>
            </StackConteiner>
            {isModalVisible ? <Modal /> : <Spreadsheet />}

        </Conteiner>

    )

}

export default SearchBox

