import { Link } from 'react-router-dom';
import { DarkmodeToggle } from '@/components/darkmode-toggle';

export default function Navbar() {
    return (
        <aside className="h-16 bg-gray-100 dark:bg-gray-800 p-4 flex flex-row justify-between gap-4">
            <div className="flex items-center gap-8">
                <Link to="/" className="text-xl font-extrabold mr-4">ProcessM.NET</Link>
                <Link to="/about" className="block hover:underline">About</Link>
                <Link to="/setup" className="block hover:underline">Setup</Link>
                <Link to="/docs" className="block hover:underline">Documentation</Link>
                <Link to="/usage" className="block hover:underline">Usage</Link>
                <Link to="/contact" className="block hover:underline">Contact us</Link>
            </div>
            <DarkmodeToggle />
        </aside>
    );
}