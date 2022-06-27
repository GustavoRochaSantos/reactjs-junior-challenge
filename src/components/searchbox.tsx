import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styled from 'styled-components'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Modal from './modal'
import Spreadsheet from "./spreadsheet";
import axios from 'axios'
import { useEffect } from "react";
import { CreateData } from "../types/types";

const Conteiner = styled.div`
display: flex;
flex-direction: column;
align-items: center ;
justify-content:  center;
padding: 10px ;
`

const StackConteiner = styled(Stack)`
float: right;
margin-left: 700px;
margin-top: -45px ;
`

function SearchBox() {
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [clientFiltered, setClientFiltered] = useState<CreateData[]>([])
    const [searchTerm, setSeachTerm] = useState('')

    const searchClients = () => {
        const text = searchTerm
        axios
            .get(`http://localhost:3001/clients?q=${text}`)
            .then((res) => {
                setClientFiltered(res.data)
                console.log(res.data)
                cleanFields()
            })
            .catch((err) => {
                console.log(err.message)
            })
    }

    console.log(searchTerm)

    useEffect(() => {
        searchClients();
    }, [])

    const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSeachTerm(event.target.value)
    }

    const cleanFields = () => {
        setSeachTerm('')
    }

    const sendForm = (event: React.SyntheticEvent) => {
        event.preventDefault()
        console.log('formulario enviado', searchTerm)
        searchClients()
    }

    return (
        <Conteiner>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '400px' },
                }}
                noValidate
                autoComplete="off"
                onSubmit={sendForm}
            >
                <TextField id="outlined-basic" variant="outlined" sx={{
                    '& > :not(style)': { height: '40px' },
                }}
                    type='text'
                    name='searchTerm'
                    value={searchTerm}
                    onChange={handleFormChange}
                />

            <StackConteiner spacing={2} direction="row" >

                <Button variant="outlined" size='small' type='submit'>Pesquisar</Button>

                <Button onClick={() => setIsModalVisible(true)} variant="outlined" size='small'>Adicionar Cliente</Button>
            </StackConteiner>
    
            </Box>


            {isModalVisible ? <Modal /> : <Spreadsheet clientFiltered={clientFiltered} searchTerm={searchTerm} />}

        </Conteiner>

    )

}

export default SearchBox

