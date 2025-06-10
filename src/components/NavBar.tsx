import { Link } from 'react-router-dom';
import { DarkmodeToggle } from '@/components/darkmode-toggle';
import { navbarItems } from '@/components/Providers/navbar-provider';
import { NavbarCombobox } from '@/components/NavbarCombobox';

export default function Navbar() {
    return (
        <aside className="h-16 bg-gray-100 dark:bg-gray-800 p-4 flex flex-row justify-end md:justify-between gap-4">
            <div className="hidden md:flex items-center gap-8">
                {navbarItems.map(item => (
                  <Link
                    key={item.value}
                    to={item.value}
                    className={item.value === "/" ? "text-xl font-extrabold mr-4" : "block hover:underline"}
                  >
                    {item.label}
                  </Link>
                ))}
            </div>
            <DarkmodeToggle />
            <div className="md:hidden">
              <NavbarCombobox/>
            </div>
        </aside>
    );
}