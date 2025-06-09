import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <aside className="h-16 bg-gray-100 dark:bg-gray-800 p-4 flex flex-row gap-4">
            <h2 className="text-xl font-bold mr-8">ProcessM.NET</h2>
            <Link to="/about" className="block hover:underline">About</Link>
            <Link to="/setup" className="block hover:underline">Setup</Link>
            <Link to="/usage" className="block hover:underline">Usage</Link>
            <Link to="/sidebar" className="block hover:underline">SideBar for the future</Link>
        </aside>
    );
}