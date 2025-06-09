import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <aside className="w-64 bg-gray-100 dark:bg-gray-800 p-4">
            <h2 className="text-xl font-bold mb-4">Docs</h2>
            <nav className="space-y-2">
            <Link to="/" className="block hover:underline">Introduction</Link>
            <Link to="/usage" className="block hover:underline">Usage</Link>
            </nav>
        </aside>
    );
}