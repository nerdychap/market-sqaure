import { Image } from '@chakra-ui/image'
import { Box, Flex } from '@chakra-ui/layout'
import React from 'react'
import {MdFavoriteBorder,MdAddShoppingCart } from 'react-icons/md'

const SingleProduct = ({ item }) => {
    const { image, title, price } = item
    return (
        <Box maxW="sm" borderWidth="1px" height="sm" borderRadius="lg" m="5" overflow="hidden">
            <Image src={image} alt={title}  height="60%" m="auto" mt="2"/>
            <Box p="6" height="20%">
                <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                >
                    {title}
                </Box>

                <Box>
                    ${price}
                </Box>
            </Box>
            <Flex height="20%" justify="space-between" align="center">
                <MdFavoriteBorder size={25} style={{margin: '5%'}} color="grey"/>
                <MdAddShoppingCart size={25} style={{margin: '5%'}} color="blue"/>
            </Flex>
        </Box>
    )
}

export default SingleProduct
