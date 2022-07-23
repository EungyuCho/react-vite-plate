import { ChakraProvider } from '@chakra-ui/react'
import { ReactNode } from 'react'

const RootProvider = ({ children }: { children: ReactNode }) => (
  <ChakraProvider>{children}</ChakraProvider>
)

export default RootProvider
