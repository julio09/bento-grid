import { Button, HStack, Stack, Text, VStack } from '@chakra-ui/react'
import { Av1, Av2, Drug, Nurse, Play } from "../layouts"

import React from 'react'

export default function Hero() {
  return (
    <>
    <VStack align={'start'} px={'74px'} mb={'209px'} gap={'55px'}>
      <VStack align={'start'}>
        <Text bgClip='text' fontSize={'34px'} fontWeight={500} bgGradient=' linear-gradient(270deg, #B297F7 0%, #FFF 38.24%, #87CDF5 93.15%)'>CONNECT, CONSULT, AND CARE REMOTELY</Text>
        <Text fontSize={'95px'} lineHeight="normal" fontWeight={'bold'} color={'white'}>Get high-quality<br />service with quality <br />
        <span><Text bgClip={'text'} bgGradient=' linear-gradient(270deg, #B297F7 0%, #FFF 38.24%, #87CDF5 93.15%)' lineHeight={"normal"}>telemedecine</Text></span>
        </Text>
      </VStack>
      <HStack gap={"17px"} align={'start'}>
        <HStack className='-space-x-6 bg-transparent'>
            <img alt='' src={Av1} className='bg-transparent' />
            <img alt='' src={Av2} className='bg-transparent' />
        </HStack>
        <VStack fontSize={'23px'} color={'white'} gap={'10px'} align={'start'}>
            <Text>Take control of yur health and experience</Text>
            <Text>the benefits of telemedicine with our platform.</Text>
        </VStack>
      </HStack>
    </VStack>
    <HStack gap={'28px'} ml={'296px'} mb={'243px'} align={"center"}>
        <Stack w={"70px"} h={"70px"} alignItems={"center"} justify={"center"} borderRadius={"100%"} bgGradient={"linear-gradient(202deg, #B69DF7 17.03%, #EBEDF6 45.55%, #87CDF5 89.45%)"}>
        <svg className='bg-transparent' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M11.625 3.95288L9.65942 5.91846L19.7409 16L9.65942 26.0815L11.625 28.0471L23.6087 16L11.625 3.95288Z" fill="black"/>
        </svg>
        </Stack>
        <Text borderBottom={'1px'} color={'white'} fontSize={'30px'} fontWeight={'bold'}>Explore More</Text>
    </HStack>
    <Stack pos={'absolute'} bottom={"-130px"} right={"49px"} direction={'flex'} justifyContent={"end"} align={"flex-end"} gap={'33px'}>
        <VStack justifyContent={"end"} gap={"24px"} align={"flex-end"}>
            <VStack justify={"flex-end"} className='bg-transparent' pos={"relative"}>
            <svg className='bg-transparent' xmlns="http://www.w3.org/2000/svg" width="342" height="252" viewBox="0 0 342 252" fill="none">
            <path d="M50 252H292C319.614 252 342 229.614 342 202V167.244C342 146.951 325.549 130.5 305.256 130.5C284.963 130.5 268.512 114.049 268.512 93.7562V50C268.512 22.3858 246.127 0 218.512 0H50C22.3858 0 0 22.3858 0 50V202C0 229.614 22.3858 252 50 252Z" fill="white"/>
            </svg>
            <img alt='' src={Nurse} className='absolute left-[56px] right-[116px] bg-transparent'/>
            </VStack>
        <VStack bg={"#293CE1"} w={"461px"} h={"289"}  borderRadius={"40px"} justifyContent={"start"} alignItems={"self-start"}>
            <VStack pl={"41px"} pt={"34px"} direction={"column"} alignItems={"start"}bg={"transparent"} gap={"30px"}>
                <VStack bg={"transparent"} direction={"column"} justify={"start"} alignItems={"start"} gap={"4px"}>
                <Text fontSize={"30px"} bg={"transparent"}  color={"#FFF"} >New User</Text>
                <Text fontSize={"70px"} bg={"transparent"} fontWeight={"bold"} color={"#FFF"} >790 +</Text>
                </VStack>
                <HStack justify={"space-between"} bg={"transparent"} gap={"85px"}>
                    <Text bg={"transparent"} color={"#FFF"} fontWeight={"600"} fontSize={"27px"}>Care with</Text>
                    <Button py={"21px"} px={"46px"} variant={'outline'} color='#FFF' border={'1px solid'} rounded={'40px'}>Services</Button>
                </HStack>
            </VStack>
        </VStack>
        </VStack>
        <Stack pos={"relative"}>
        <img alt='' className='absolute bg-transparent top-[31.41px] z-20 right-[34.5px] ' src={Drug} />
        <svg xmlns="http://www.w3.org/2000/svg" className='absolute bg-transparent z-10 top-[24px] right-[28px] '  width="260" height="249" viewBox="0 0 260 249" fill="none">
          <path d="M0 41.0876C0 18.3955 18.3955 0 41.0876 0H210C237.614 0 260 22.3858 260 50V210.444C260 231.62 242.833 248.787 221.657 248.787C200.481 248.787 183.315 231.62 183.315 210.444V132.175C183.315 104.561 160.929 82.1751 133.315 82.1751H41.0876C18.3956 82.1751 0 63.7796 0 41.0876Z" fill="#87CDF5"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="518" height="587" viewBox="0 0 518 587" fill="none">
          <path d="M518 547V40C518 17.9086 500.091 0 478 0H224.691C202.599 0 184.691 17.9086 184.691 40V116.76C184.691 138.851 166.782 156.76 144.691 156.76H40C17.9086 156.76 0 174.669 0 196.76V547C0 569.091 17.9086 587 40 587H478C500.091 587 518 569.091 518 547Z" fill="#FDFCFC"/>
        </svg>
        <Text bg={"transparent"} left={"70px"} lineHeight={"normal"} top={"277px"} fontSize={"40px"} fontWeight={"600"} color={"#15005B"} pos={"absolute"}>Virtual 
        <br/>consultations</Text>
        <VStack fontSize={"20px"} fontWeight={"600"} pos={"absolute"} right={"29px"} top={"403px"} bottom={"92px"} bg={"transparent"} alignItems={"start"} gap={"10px"}>
            <Text bg={"transparent"}>Timely care with virtual</Text>
            <Text bg={"transparent"}>consultations typically being</Text>
            <Text bg={"transparent"}>scheduled</Text>
        </VStack>
        <Button py={"21px"} px={"46px"} variant={'outline'} color='#7A7A7A' border={'2px solid'} left={"37px"} bottom={"26px"} pos={"absolute"} rounded={'40px'}>Services</Button>
        <Text pos={"absolute"} left={"31px"} top={"236px"} fontWeight={"800"} h={"82px"} w={"35px"} fontSize={"50px"} bg={"transparent"} color={"#87CDF5"}>+</Text>
        </Stack>
    </Stack>
    <Stack pos={"absolute"} top={"256"} direction={"column"} bottom={"772"} right={"74px"} align={"self-start"} gap="20px">
        <VStack align={"self-start"} gap={11}>
            <Text color={"white"} fontSize="65px" fontWeight={700}>340 <span className='font-[800] text-[#87CDF5]'>+</span></Text>
            <Text fontSize={"23px"} color={"white"} lineHeight={"normal"}>
            Transforming Helthcare with<br />
            Telemedicine: Connect,<br />
            Consult, and Care Remotely
            </Text>
        </VStack>
        <Text fontSize={25} bgClip={"text"} bgGradient={"linear-gradient(270deg, #B297F7 0%, #FFF 38.24%, #87CDF5 93.15%)"} fontWeight={"bold"} lineHeight={"normal"}>TIMELY CARE</Text>
    </Stack>
    <Stack pos={"absolute"} top={"557px"} right={"408px"} borderRadius={"40px"} w={"235px"} align={"center"} justify={"center"} h={"138px"} bgGradient={"linear-gradient(202deg, #B69DF7 17.03%, #EBEDF6 45.55%, #87CDF5 89.45%)"} >
        <VStack bg={"transparent"} border={" 2px solid #FFF"} px={"12"} py={"5"} borderRadius={"40px"}>
        <img  src={Play} alt='' className='bg-transparent'/>
        <Text fontSize={"23px"} bg={"transparent"} fontWeight={"bold"} color={"#FFF"} >Play Video</Text>
        </VStack>
    </Stack>
    </>
  )
}
