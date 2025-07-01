import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner"
import { Outlet } from "react-router-dom";

export function MainLayout() {
    return (
        <>
            <Navbar />
            <div className="flex flex-1 p-6 justify-center">
                <Outlet />
                <Toaster />
            </div>
        </>
    );
}

export default MainLayout;
