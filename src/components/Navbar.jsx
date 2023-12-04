import { Button, Flex, HStack, Spacer, Text } from '@chakra-ui/react';
import {Cart,User} from "../layouts"

import React from 'react';

function Navbar() {
return (
    <div>
        <Flex mx={'74px'} justify={'space-between'} mt="40px" mb={'166px'}>
            <Text as="b" fontSize="40px" bgClip='text' bgGradient=' linear-gradient(270deg, #B297F7 0%, #FFF 38.24%, #87CDF5 93.15%)' >healthcareplus</Text>
            <Spacer />
            <HStack align={'center'} gap={'28px'} >
            <Button fontWeight={'semibold'} fontSize={'20px'} py={'14px'} px={'50px'} variant={'outline'} color='#87CDF5' border={'1px solid'} rounded={'100px'}>Menu</Button>
            <HStack align={'center'} gap={'28px'}>
                <img alt='' src={Cart} />
                <img alt="" src={User} />
            </HStack>
            </HStack>
        </Flex>
    </div>
)
}

export default Navbar