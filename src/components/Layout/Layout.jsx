import React from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {useLocation} from "react-router-dom";


const Layout = ({children})=>{
    const location = useLocation()
  return  <>
        <Header headerTransparend={location.pathname==='/'}/>
        {children}
        <Footer/>
    </>
}
export default Layout