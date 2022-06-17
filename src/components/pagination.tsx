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

export default function PaginationComponent() {
  return (
      <PaginationConteiner>
    <Stack spacing={3} >
      <Pagination count={10} />
    </Stack>
    </PaginationConteiner>
  );
}