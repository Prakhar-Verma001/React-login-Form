import React from 'react'
import Navigate from '../components/Navigate'
import Chakra from '../components/Chakra'
import Footer from '../components/Footer'
import Img1 from '../assests/logo-creative-tim-blackPurity.png'
const ChakraPage = () => {
  return (
    <div>
        <Navigate buttonColor='#FFFFFF' textColor='black'
           backColor='rgba(255, 255, 255, 0.8)' shedows={5}
            filters='blur(6px)' pics={Img1} />
        <Chakra />
        <Footer />
    </div>
  )
}

export default ChakraPage