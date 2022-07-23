import { chakra } from '@chakra-ui/react'
import { motion, isValidMotionProp } from 'framer-motion'


const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
});

export default ChakraBox