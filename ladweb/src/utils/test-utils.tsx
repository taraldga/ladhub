import React from 'react'
import {render, RenderOptions} from '@testing-library/react'
import {ChakraProvider} from '@chakra-ui/react'
import {BrowserRouter} from 'react-router-dom'


// @ts-ignore
const AllTheProviders = ({children}) => {
  return (
    <BrowserRouter>
      <ChakraProvider>
        {children}
      </ChakraProvider>
    </BrowserRouter>
  )
}

const customRender = (ui: React.ReactElement<any, string | React.JSXElementConstructor<any>>, options?: RenderOptions<typeof import("@testing-library/dom/types/queries"), HTMLElement, HTMLElement>) =>
  render(ui, {wrapper: AllTheProviders, ...options})

// re-export everything
export * from '@testing-library/react'

// override render method
export {customRender as render}