import { Input, InputGroup, InputRightAddon } from '@chakra-ui/input';
import { Flex, Heading } from '@chakra-ui/layout';
import React from 'react';
import { MdFavorite, MdSearch, MdShoppingCart } from "react-icons/md";

const Header = () => {
    return (
        <Flex justify="space-between" bgColor="white" boxShadow="md" p={5} >
            <Heading>Market Square</Heading>
            <Flex justify="space-between" gridGap="10">
                <InputGroup>
                    <Input type="text" name="query" />
                    <InputRightAddon>
                        <MdSearch />
                    </InputRightAddon>
                </InputGroup>
                <MdFavorite size="40"/>
                <MdShoppingCart size="40" />
            </Flex>
        </Flex>
    )
}

export default Header
