import Footer from "./footer"
import Navbar from "./navbar"
import React from "react"

type LayoutProps = {
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="bg-white  ">
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default Layout
