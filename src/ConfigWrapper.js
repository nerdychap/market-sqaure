import { ChakraProvider } from "@chakra-ui/react"
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store/store'


const ConfigWrapper = ({ children }) => {
    return (
        <Provider store={store}>
            <ChakraProvider>
                {children}
            </ChakraProvider>
        </Provider>

    )
}

export default ConfigWrapper
