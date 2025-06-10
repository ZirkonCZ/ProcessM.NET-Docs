import DocPage from "@/components/DocPage";
import { FC } from "react";

const HomePage: FC = () => {
    return (
        <div className="home-page fixed-height">
            <h1 className="content__header">Welcome to ProcessM.NET Documentation</h1>
            <p className="content__description">
                This is the home page of the ProcessM.NET documentation. You can find various guides and
                resources to help you get started.
            </p>
        </div>
    );
}

export default HomePage;