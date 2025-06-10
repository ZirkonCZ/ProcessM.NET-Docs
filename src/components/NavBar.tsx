import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <aside className="h-16 bg-gray-100 dark:bg-gray-800 p-4 flex flex-row gap-4">
            <Link to="/" className="text-xl font-extrabold mr-8">ProcessM.NET</Link>
            <Link to="/about" className="block hover:underline">About</Link>
            <Link to="/setup" className="block hover:underline">Setup</Link>
            <Link to="/docs" className="block hover:underline">Documentation</Link>
            <Link to="/usage" className="block hover:underline">Usage</Link>
            <Link to="/contact" className="block hover:underline">Contact us</Link>
            <Link to="/sidebar" className="block hover:underline">SideBar for the future</Link>
        </aside>
    );
}