import Navbar from "@/components/Navbar";
import {Outlet} from "react-router-dom";

export function MainLayout() {
    return (
        <>
            <Navbar />
            <div className="flex-1 p-6">
                <Outlet />
            </div>
        </>
    );
}

export default MainLayout;
