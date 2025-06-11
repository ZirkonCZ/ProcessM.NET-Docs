import DocPage from "@/components/DocPage";
import { FC } from "react";

const HomePage: FC = () => {
    return (
        <div className="homepage text-center p-12">
            <h1 className="h1 mb-12">Your process monitoring, simplified</h1>
            <h2 className="h2 mb-16">with the <a href="/about" className="text-tertiary">ProcessM.NET</a> library</h2>
            <p className="p mb-16 text-lg">
                Your open-source, .NET-based solution for real-time process monitoring and management.
            </p>
            <p className="p text-lg">
                <a href="https://github.com/lasaris/ProcessM.NET" className="hyperlink">Clone the repository</a>, <a href="/setup" className="hyperlink">set up</a> the environment, and start mining your process data today!
            </p>
        </div>
    );
}

export default HomePage;