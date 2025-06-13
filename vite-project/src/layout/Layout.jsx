import { Outlet } from "react-router-dom";
import Navigation from "../components/navigation/Navigation";
import Footer from "../components/footer/Footer";

const Layout = () => {
    return (
        <div>
            <main>
                <Navigation />
                <Outlet />
                <Footer />
            </main>
        </div>
    )
}

export default Layout;