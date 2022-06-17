import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styled from 'styled-components';
import { Button } from '@mui/material';
import { v4 } from 'uuid';
import axios from 'axios';
import { useState } from 'react';
import { ClientInfo, CreateData } from '../types/types';
import { useEffect } from 'react';

const ModalConteiner = styled.div`
display: flex ;
flex-direction: column;
align-items: center ;
justify-content: center ;
`

interface EditModalProps {
    editId: string;
}



export default function EditModal(props: EditModalProps) {
    const [clients, setClients] = useState<CreateData[]>([])
    const { editId } = props;
    const [form, setForm] = useState<ClientInfo>({
        id: props.editId,
        name: "",
        company: "",
        email: "",
        phone: "",
        address: "",
        note: "",
        isActive: true,
    })

    console.log({ editId });


    function updateClient(body: ClientInfo) {
        axios
            .put(`http://localhost:3001/clients/${form.id}`, 
                body
            )
            .then((response) => {
                setForm(response.data);
                cleanFields()
                alert('Alteração feita');
            })
            .catch((err: any) => {
                console.log(err.response);
            });
    }

    const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };

    const cleanFields = () => {
        setForm({ id: props.editId, name: "", company: "", email: "", phone: "", address: "", note: "", isActive: true });
    };

    const sendFormData = (event: React.SyntheticEvent) => {
        event.preventDefault()
        updateClient(form)
    }

/* 
    const getClients = () => {
        axios
            .get(
                `http://localhost:3001/clients/${form.id}`
            )
            .then((res) => {
                setClients(res.data)
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err.response)
            });
    }

    useEffect(() => {
        getClients()
    }, []); */

    return (
        <ModalConteiner>
            <h2>Editar dados cliente</h2>
            <hr />
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '70ch' },
                }}
                noValidate
                autoComplete="off"
                onSubmit={sendFormData}
            >

                <TextField
                    id="outlined-multiline-flexible"
                    name="name"
                    label="Nome"
                    value={form.name}
                    onChange={onChange}
                    type='text'
                    required
                />
                <TextField
                    id="outlined-textarea"
                    name="company"
                    label="Empresa"
                    value={form.company}
                    onChange={onChange}
                    type='text'
                    required
                />
                <TextField
                    id="outlined-multiline-flexible"
                    name="phone"
                    label="Telefone"
                    value={form.phone}
                    onChange={onChange}
                    type='text'
                    required
                />
                <TextField
                    id="outlined-textarea"
                    name="email"
                    label="Email"
                    value={form.email}
                    onChange={onChange}
                    type='email'
                    required
                />
                <TextField
                    id="outlined-textarea"
                    name="address"
                    label="Endereço"
                    value={form.address}
                    onChange={onChange}

                />
                <TextField
                    id="outlined-multiline-static"
                    name="note"
                    label="Notas"
                    multiline
                    rows={4}
                    value={form.note}
                    onChange={onChange}
                />

                <Button variant="outlined" size='small' type='submit' >Enviar</Button>
            </Box>


        </ModalConteiner>
    );
}
