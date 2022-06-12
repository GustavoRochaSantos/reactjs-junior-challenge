import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Conteiner = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center ;
cursor: pointer
`

const Icon = styled.img`
height: 30px;
`

interface createData {
  id: string,
  name: string,
  company: string,
  phone: string,
  email: string,
  isActive: boolean
}


export default function Spreadsheet() {

  const [clients, setClients] = useState<createData[]>([])
  const [deletClient, setDeletClient] = useState()


  const getClients = () => {
    axios
      .get(
        "http://localhost:3001/clients"
      )
      .then((res) => {
        setClients(res.data)
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err.response)
      });
  }

   const api = axios.create({
  baseURL: "http://localhost:3001",
  });

  async function deleteClient(id: string) {
    await (api).delete(`/clients/${id}`);
    const newClients = clients.filter((client) => {
      return client.id != id;
    });

    setClients(newClients);
  }

  useEffect(() => {
    getClients()
  }, []);


  return (
    <Conteiner>
      <TableContainer component={Paper} sx={{ width: 1300 }}>
        <Table size="medium" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="right"></TableCell>
              <TableCell align="left">Nome</TableCell>
              <TableCell align="right">Empresa</TableCell>
              <TableCell align="right">Telefone</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {clients?.map(({id, name, phone, email, isActive, company}) => (
              <TableRow
                key={id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="right">
                <button onClick={()=>deleteClient(id)}>X</button>
                </TableCell>

                <TableCell component="th" scope="row">
                  {name}
                </TableCell>
                <TableCell align="right">{company}</TableCell>
                <TableCell align="right">{phone}</TableCell>
                <TableCell align="right">{email}</TableCell>
                <TableCell align="right">{(isActive ? "Ativo" : "Inativo")}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Conteiner>
  );
}



