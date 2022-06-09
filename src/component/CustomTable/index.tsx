import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer, useToast, Flex,
} from '@chakra-ui/react'
import {IClientsProps} from "../../types/apiResult";
import {FiEdit, ImFileEmpty, MdDelete, MdHideImage} from "react-icons/all";
import {deleteClient, getAllClients} from "../../helpers/crudOperator";
import {CustomButtonIcon} from "../CustomButtonIcon";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import ReactPaginate from "react-paginate";


export const CustomTable =()=> {
    const [data,setData] =useState<IClientsProps[]>([])
    const {searchText, image} = useSelector((state: any) => state);
    const dispatch = useDispatch();
    const toast = useToast()
    const [loading,setLoading] =useState<boolean>(true)
    const [pageNumber, setPageNumber] = useState(0);
    const usersPerPage = 5;
    const pagesVisited = pageNumber * usersPerPage;
    const [currentItems, setCurrentItems] = useState<IClientsProps[]>([]);
    const pageCount = Math.ceil(currentItems?.length / usersPerPage);



    useEffect( () => {
        getAllClients().then((res:any) => {
            setData(res)
           dispatch({ type: 'set', clientData: data, loading:loading })
            setLoading(false)
        })

        setCurrentItems(data?.slice(0, 50))
    }, [data])

    return (
        <TableContainer>
            <Table variant='simple' >
                <Thead>
                    <Tr>
                        <th>ação</th>
                        <th>Foto</th>
                        <Th>Nome</Th>
                        <Th>Empresa</Th>
                        <Th>Telefone</Th>
                        <Th>Endereço</Th>
                        <Th>Email</Th>
                        <Th>Nota</Th>
                        <Th>Status</Th>
                    </Tr>
                </Thead>
                <Tbody >
                    {
                        currentItems?.filter(client=>
                            client.name.includes(searchText)
                            ||
                            client.phone.includes(searchText)
                            ||
                            client.company.includes(searchText)
                            ||
                            client.email.includes(searchText)
                            ||
                            client.address.includes(searchText)
                            ||
                            client.note.includes(searchText)
                        )?.slice(pagesVisited, pagesVisited + usersPerPage)?.map((client, index)=>
                            <Tr key={client?.id}  >
                                <Td display={'flex'} gap={'10px'} alignItems="center" p={5}>
                                    <CustomButtonIcon Icon={FiEdit} type={'edit'} dataClient={client}/>
                                    <MdDelete onClick={()=> {
                                        currentItems?.splice(index, 1)
                                        deleteClient(client.id)
                                        toast({
                                            title: 'Cliente apagado com Sucesso.',
                                            description: "Nós deletamos seus dados.",
                                            status: 'info',
                                            duration: 5000,
                                            isClosable: true,
                                        })
                                    }}/>
                                </Td>
                                <td>
                                    {
                                        client?.image ?
                                            <img src={client?.image} alt="client" style={{
                                            width:'30px', height:'30px'
                                            }}/>
                                            :
                                            <MdHideImage />
                                    }

                                </td>
                                <Td>{client?.name}</Td>
                                <Td>{client?.company}</Td>
                                <Td>{client?.phone}</Td>
                                <Td>{client?.address}</Td>
                                <Td>{client?.email}</Td>
                                <Td>{client?.note}</Td>
                                <Td>{client?.isActive ? 'activo' : 'inativo'}</Td>
                            </Tr>
                        )
                    }
                </Tbody>
            </Table>
            <Flex  align="center" justify="center" my={'40px'}>
                <ReactPaginate
                    pageCount={pageCount}
                    onPageChange={({selected})=>setPageNumber(selected)}
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    containerClassName={"paginationBtns"}
                    previousLinkClassName={"previousBtns"}
                    pageLinkClassName={"nextBtn"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                />
            </Flex>

        </TableContainer>
    )
}
