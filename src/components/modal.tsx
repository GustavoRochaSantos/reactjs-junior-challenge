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

interface ClientInfo{
id: string,
name: string,
company: string,
email: string,
phone?: string,
address?: string,
note?: string,
isActive: boolean
}




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

    console.log(form)


    const body = {
        id: form.id,
        name: form.name,
        company: form.company,
        email: form.email,
        phone: form.phone,
        adress: form.address,
        note: form.note,
        isActive: form.isActive
    }

    axios.post(
        "http://localhost:3001/clients", body, {
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then((res) => {
            setForm(res.data)
            console.log(res.data)

        })
        .catch((err) => {
            console.log("erro", err.response)
        });

        const handleChange = (event: any) => {
            setForm(event.target.value);
          };

   const cleanFields = () => {
        setForm({id:"", name:"", company:"", email:"",phone:"", address:"", note:"", isActive: true });
      };

    const sendForm = (event: any) => {
        event.preventDefault()
        console.log("Formulario enviado", form)
        cleanFields()
  } 


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
                onSubmit={sendForm}
                  >
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Nome"
                        value={form.name}
                        onChange={handleChange}
                    />
                    <TextField
                        id="outlined-textarea"
                        label="Empresa"
                        value={form.company}
                        onChange={handleChange}
                        multiline
                    />
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Telefone"
                        maxRows={4}
                        value={form.phone}
                        onChange={handleChange}
                    />
                    <TextField
                        id="outlined-textarea"
                        label="Email"
                        value={form.email}
                        onChange={handleChange}
                    />
                    <TextField
                        id="outlined-textarea"
                        label="Endereço"
                        value={form.address}
                        onChange={handleChange}
                    />
                    <TextField
                        id="outlined-multiline-static"
                        label="Notas"
                        multiline
                        rows={4}
                        value={form.note}
                        onChange={handleChange}
                    />
            </Box> 
            
            <Button variant="outlined" size='small' type="submit" >Adicionar</Button>
 
        </ModalConteiner>
    );
}
