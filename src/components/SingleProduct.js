import { Image } from '@chakra-ui/image'
import { Box, Flex } from '@chakra-ui/layout'
import { IconButton } from "@chakra-ui/react"
import React from 'react'
import { MdAddShoppingCart, MdFavoriteBorder } from 'react-icons/md'
import { useDispatch } from "react-redux"
import { watchCartAddItem } from "../store/action"

const SingleProduct = ({ item }) => {
    const { image, title, price } = item
    const dispatch = useDispatch()
    const addToCart = () => {
        dispatch(watchCartAddItem(item))
    }
    return (
        <Box maxW="sm" borderWidth="1px" height="sm" borderRadius="lg" m="5" overflow="hidden">
            <Image src={image} alt={title} height="60%" m="auto" mt="2" />
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
                <IconButton bgColor="transparent" icon={<MdFavoriteBorder size={25} style={{ margin: '5%' }} color="grey" />} />
                <IconButton bgColor="transparent" onClick={addToCart} icon={<MdAddShoppingCart size={25} style={{ margin: '5%' }} color="blue" />} />
            </Flex>
        </Box>
    )
}

export default SingleProduct
