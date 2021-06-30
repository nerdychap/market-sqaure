import { Input, InputGroup, InputRightAddon } from '@chakra-ui/input';
import { Badge, Box, Flex, Heading } from '@chakra-ui/layout';
import React from 'react';
import { MdFavorite, MdSearch, MdShoppingCart } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { watchFilterProducts } from '../store/action';

const Header = () => {
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const handleQueryChange = ({ target: { value } }) => {
        dispatch(watchFilterProducts(value))
    }
    return (
        <Flex justify="space-between" bgColor="white" boxShadow="md" p={5} >
            <Heading>Market Square</Heading>
            <Flex justify="space-between" gridGap="10">
                <InputGroup>
                    <Input type="text" name="query" onChange={handleQueryChange} />
                    <InputRightAddon>
                        <MdSearch />
                    </InputRightAddon>
                </InputGroup>
                <MdFavorite size="40" />
                <Box>
                    <MdShoppingCart size="40" />
                    <Badge pos="absolute" top="2%" rounded="lg" bgColor="lightgreen" color="black">{cart.length}</Badge>
                </Box>

            </Flex>
        </Flex>
    )
}

export default Header
