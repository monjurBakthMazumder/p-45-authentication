import { Outlet } from "react-router-dom";
import Footer from "../Component/Shared/Footer/Footer";
import Navbar from "../Component/Shared/Navbar/Navbar";

const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <div className="min-h-[80vh] px-5 sm:px-[10%] my-10">
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;