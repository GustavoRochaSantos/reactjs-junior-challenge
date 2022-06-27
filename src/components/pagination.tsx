import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import styled from 'styled-components';

const PaginationConteiner = styled.div`
display: flex;
flex-direction: column;
align-items: center ;
justify-content: center ;
padding: 10px;
`
const MAX_ITENS = 10
const MAX_LEFT = (MAX_ITENS - 1)/2

export default function PaginationComponent({setPage, pageNumber}: any) {

  const handleChange = (page: any) => {
    setPage(page);
    window.scroll(0,0)
  };

  return (
      <PaginationConteiner>
    <Stack spacing={3} >
      <Pagination count={pageNumber} onChange={(event: React.ChangeEvent<unknown>, page: number)=>handleChange(event)}/>
    </Stack>
    </PaginationConteiner>
  );
}
