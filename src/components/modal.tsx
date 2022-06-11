import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styled from 'styled-components';
import { Button } from '@mui/material';
import { v4 } from 'uuid';
import axios from 'axios';
import { useState } from 'react';
import useForm from '../hooks/useForm';

const ModalConteiner = styled.div`
display: flex ;
flex-direction: column;
align-items: center ;
justify-content: center ;
`

interface ClientInfo {
    id: string,
    name: string,
    company: string,
    email: string,
    phone?: string,
    address?: string,
    note?: string,
    isActive?: boolean
}


/* export class IdGenerator {
    // constructor(){}
    generateId = (): string => v4()
}

const idV4: string = new IdGenerator().generateId()
 */

export default function Modal() {
    const [form, setForm] = useState<ClientInfo>({
        id: v4(),
        name: "",
        company: "",
        email: "",
        phone: "",
        address: "",
        note: "",
        isActive: true
    })

    const createPost = (body: any) => {

        axios.post(
            "http://localhost:3001/clients", body, {
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then((res) => {
                setForm(res.data)
                console.log(form)
                cleanFields()
                alert('Usuário cadastrado com sucesso')
            })
            .catch((err) => {
                console.log("erro", err.response.message)
            });
    }

    const onChange = (event: React.ChangeEvent<any>): void => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };

    const cleanFields = () => {
        setForm({ id: "", name: "", company: "", email: "", phone: "", address: "", note: "", isActive: true });
    };

 const onSubmitForm = (event: React.FormEvent<any>) => {
        event.preventDefault()
        createPost(form)
        cleanFields()
    } 

    console.log(form)


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
                onSubmit={onSubmitForm}
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
                <Button variant="outlined" size='small' >Adicionar</Button>
            </Box>


        </ModalConteiner>
    );
}
