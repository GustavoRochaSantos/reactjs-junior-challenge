import React, { useState } from "react";

import {CustomTable} from "../CustomTable";
import {Box, Button, Flex, FormControl, FormLabel, Heading, Image, Input, Text} from "@chakra-ui/react";
import logo from '../assets/img/logo.png'
import {CustomButtonIcon} from "../CustomButtonIcon";
import {AiFillFacebook, AiFillInstagram, AiOutlineInstagram, IoPersonAdd} from "react-icons/all";
import {useDispatch} from "react-redux";

export const App =()=> {
    const dispatch = useDispatch();
    const [value, setValue] = useState('');

  return (
        <Flex flexDir={'column'}>
            <Flex borderBottom={'1px solid #BE152A'} px={'25px'} py={'40px'} align="center" gap={'246px'}>
                <Image src={logo}/>
                <Text fontWeight={'700'} fontSize={'40px'} lineHeight={'54px'} >Frontend Challenge</Text>
            </Flex>
            <Flex p={'70px'} flexDir={'column'} h={'70vh'}>
                <Box display={'flex'} alignItems={'center'} mb={'41px'} gap={'20px'} >
                        <Input
                            placeholder='Pesquisar por nome, empresa , telefone, email ou status'
                            w={{base:'300px', md:'649px'}}
                            h={'50px'}
                            autoComplete={'off'}
                            onChange={({target})=>setValue(target.value)}
                        />
                    <Button
                        bgColor={'rgba(190, 21, 42, 1)'}
                        color={'white'}
                        _hover={{backgroundColor: 'rgba(190, 21, 42, 0.8)'}}
                        _active={{backgroundColor: ''}}
                        h={'50px'}
                        onClick={()=>{
                            dispatch({ type: 'set', searchText:value })
                        }}
                    >Search</Button>
                    <CustomButtonIcon Icon={IoPersonAdd} type={'add'}/>
                </Box>
                <CustomTable />
            </Flex>

            <Flex bgColor={'#666666'} py={'36px'} px={'70px'} justify="space-between" color={'#fff'}>
                <Flex flexDir={'column'} align="center">
                    <Heading size={'md'} color={'#fff'}>
                        Contacto
                    </Heading>
                    <Flex gap={'26px'}>
                        <Text>
                            (xx) x.xxxx-xxxx
                        </Text>
                        <Text>
                            fulanodetal@teste.com.br
                        </Text>
                    </Flex>
                </Flex>
                <Flex flexDir={'column'} align="center">
                    <Heading size={'md'} color={'#fff'}>
                        Nossas Redes Sociais
                    </Heading>
                    <Flex gap={'5px'}>
                        <AiFillFacebook fontSize={'30px'}/>
                        <AiOutlineInstagram fontSize={'30px'}/>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
  )
}
