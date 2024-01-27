import React from "react";

import Header from "./Comtainer/Header/Header";
import Footer from "./Comtainer/Footer/Footer";
import { Outlet } from "react-router-dom";
function Layout(){

    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}

export default Layout;
