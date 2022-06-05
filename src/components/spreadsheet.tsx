import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styled from 'styled-components';

const Conteiner = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center ;
`

function createData(
  nome: string,
  empresa: string,
  telefone: string,
  email: string,
  status: boolean,
) {
  return { nome, empresa, telefone, email, status };
}

const rows = [  
  createData("Fulano", "Empresa", "(51)92780681", "claricepassos@gmail.com", true)
  
];

export default function Spreadsheet() {
  return (
    <Conteiner>
    <TableContainer component={Paper} sx={{ width: 1500 }}>
      <Table  size="medium" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell align="right">Empresa</TableCell>
            <TableCell align="right">Telefone</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.nome}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.nome}
              </TableCell>
              <TableCell align="right">{row.empresa}</TableCell>
              <TableCell align="right">{row.telefone}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Conteiner>
  );
}