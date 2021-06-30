import { Flex, Grid } from '@chakra-ui/layout'
import { Spinner } from '@chakra-ui/spinner'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { watchGetProducts } from '../store/action'
import SingleProduct from './SingleProduct'

const Products = () => {
    const { data, isLoading } = useSelector(state => state.products)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(watchGetProducts())

    }, [dispatch])
    if (isLoading) return <Flex height="100%" justify="center" align="center">
        <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
        />
    </Flex>
    return (
        <Grid templateColumns="repeat(auto-fit, 350px)" justifyContent="center" p={5} >
            {
                data.map(item => <SingleProduct key={item.id} item={item} />)
            }
        </Grid>
    )
}

export default Products
