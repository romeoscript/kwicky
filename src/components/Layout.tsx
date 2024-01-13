import Footer from "./footer"
import Navbar from "./navbar"
import React from "react"

type LayoutProps = {
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="bg-white ">
            <Navbar />
            <main className="max-w-[1440px]  m-auto ">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout
