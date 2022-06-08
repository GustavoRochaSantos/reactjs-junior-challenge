import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styled from 'styled-components';
import { Button } from '@mui/material';

const ModalConteiner = styled.div`
display: flex ;
flex-direction: column;
align-items: center ;
justify-content: center ;
`

const InputConteiner = styled.div`
display: flex ;
flex-direction: column;
align-items: center ;
justify-content: center ;
`


export default function Modal() {
    const [value, setValue] = React.useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    return (
        <ModalConteiner>
            <h2>Dados do cliente</h2>
            <hr />
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '70ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <InputConteiner>
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Nome"
                        placeholder="Nome"
                        multiline
                        maxRows={4}
                        value={value}
                        onChange={handleChange}
                    />
                    <TextField
                        id="outlined-textarea"
                        label="Empresa"
                        placeholder="Empresa"
                        multiline
                    />
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Telefone"
                        placeholder="Telefone"
                        multiline
                        maxRows={4}
                        value={value}
                        onChange={handleChange}
                    />
                    <TextField
                        id="outlined-textarea"
                        label="Email"
                        placeholder="Email"
                        multiline
                    />
                    <TextField
                        id="outlined-textarea"
                        label="Endereço"
                        placeholder="Endereço"
                    />
                    <TextField
                        id="outlined-multiline-static"
                        label="Notas"
                        multiline
                        rows={4}
                    />
                </InputConteiner>
                <Button variant="outlined" size='small'>Pesquisar</Button>

            </Box>
        </ModalConteiner>
    );
}