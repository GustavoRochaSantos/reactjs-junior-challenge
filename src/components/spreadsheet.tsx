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
import edit from '../assets/edit.svg'
import EditModal from './editModal';
import { ClientInfo, CreateData } from '../types/types';
import { formControlClasses } from '@mui/material';
import PaginationComponent from './pagination';

const Conteiner = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center ;
cursor: pointer
`

export default function Spreadsheet( clientFiltered: any, searchTerm: string) {

  const [clients, setClients] = useState<CreateData[]>([])
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [dataToEditId, setDataToEditId] = useState("")
  const [page, setPage] = useState(1)
  const [numberOfPages, setNumberOfPages] = useState(1)

  const getClients = () => {
    axios
      .get(
        `http://localhost:3001/clients?_page=${page}`
      )
      .then((res) => {
        setClients(res.data)
        console.log(res.data)
        setIsModalVisible(false)
        setNumberOfPages(res.data?.total_pages)
      })
      .catch((err) => {
        console.log(err.response)
      });
  }

  console.log(searchTerm, 'search')

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
  }, [page]);

  function goToEditModal(id: string) {
    setIsModalVisible(true)
    setDataToEditId(id)
  }


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
          {searchTerm.length > 1 ? (clientFiltered?.map((item: any) => (
              <TableRow
                key={item.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {item.name}
                </TableCell>
                <TableCell align="right">{item.company}</TableCell>
                <TableCell align="right">{item.phone}</TableCell>
                <TableCell align="right">{item.email}</TableCell>
                <TableCell align="right">{(item.isActive ? "Ativo" : "Inativo")}</TableCell>
              </TableRow>
            )))
            
            :

            (clients?.map(({ id, name, phone, email, isActive, company }) => (
              <TableRow
                key={id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="right">
                  <button onClick={() => deleteClient(id)}>X</button>
                  <img src={edit} onClick={() => goToEditModal(id)} />                </TableCell>
                <TableCell component="th" scope="row">
                  {name}
                </TableCell>
                <TableCell align="right">{company}</TableCell>
                <TableCell align="right">{phone}</TableCell>
                <TableCell align="right">{email}</TableCell>
                <TableCell align="right">{(isActive ? "Ativo" : "Inativo")}</TableCell>
              </TableRow>
            )))
          }
          </TableBody>
        </Table>
      </TableContainer>
      {isModalVisible ? (
        <EditModal editId={dataToEditId} />
      ) : null}
      <PaginationComponent setPage={setPage} pageNumber={numberOfPages}/>
    </Conteiner>
  );
}