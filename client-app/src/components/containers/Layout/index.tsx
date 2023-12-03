import { Outlet, useLocation } from "react-router";
import Header from "../Header/index";
import Footer from "../Footer/index";

const Layout = () => {

    const location = useLocation();
    const currentPath = location.pathname;
    const banned = ['/login', '/register'];
    return (
        <>
            <header className="w-100">
                <Header />
            </header>
            <main className="w-100">
                <Outlet />
            </main>
            {
                banned.includes(currentPath) ? <></> :
                    <footer className="w-100">
                        <Footer />
                    </footer>
            }
        </>
    );
}

export default Layout;