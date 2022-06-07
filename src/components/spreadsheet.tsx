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
`

interface createData{
  name: string,
  company: string,
  phone: string,
  email: string,
  isActive: boolean
}


export default function Spreadsheet() {

  const [clients, setClients] = useState<createData[]>([])



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

useEffect (() => {
  getClients()
}, []);

  return (
    <Conteiner>
    <TableContainer component={Paper} sx={{ width: 1700 }}>
      <Table  size="medium" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Nome:</TableCell>
            <TableCell align="right">Empresa</TableCell>
            <TableCell align="right">Telefone</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {clients && clients.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.company}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{(row.isActive ? "Ativo" : "Inativo")}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Conteiner>
  );
}