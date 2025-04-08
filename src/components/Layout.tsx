import Navbar from "./elements/Navbar";
import Footer from "./elements/Footer";
import { useEffect } from "react";

interface LayoutProps {
    title: string;
    children: React.ReactNode; // ReactNode: qualquer elemento do react, como um component, um text, um div, um ul, um l
}

const Layout = ({title, children} : LayoutProps) => {
    useEffect(() => {
        document.title = title;
    },[title])
    return (
        <>
            <Navbar />

            <main className="flex flex-col gap-y-20 md:gap-y-32 overflow-hidden">{children}</main>

            <Footer />
        </>
    )
}

export default Layout;