import React from 'react'
import Header from './Header';
import BrandCarousel from "./BrandsCarousel"
import Footer from './Footer';
import { Toaster } from 'react-hot-toast';
import ScrollToTop from './ScrollToTop';

const Layout = ({children}:{children:React.ReactNode}) => {
  return (
    <>
     <Header />
     {children}
     <BrandCarousel/>
     <ScrollToTop />
     <Footer />
     <Toaster 
     position='bottom-right'
     reverseOrder={false}
     gutter={8}
     containerClassName=''
     toastOptions={
      {style:{
        backgroundColor:"black",
        color:"white"
      }}
     }
     />
    </>
  )
}

export default Layout;