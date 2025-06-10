import { Routes, Route, Link } from 'react-router-dom';
import DocPage from './components/DocPage';
import DocsPage from '@/pages/DocsPage';
import router from "./router";
import Navbar from './components/Navbar';
import { ThemeProvider } from './components/Providers/theme-provider';
import {RouterProvider} from "react-router-dom";


function App() {
    return (
        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
            <div className="min-h-screen">
                <main>
                    <RouterProvider router={router} />
                    {/* <Routes>
                        <Route path="/" element={<DocPage file="intro.md" />} />
                        <Route path="/about" element={<DocPage file="about.md" />} />
                        <Route path="/setup" element={<DocPage file="setup.md" />} />
                        <Route path="/sidebar" element={<DocsPage />} />
                    </Routes> */}
                </main>
            </div>
        </ThemeProvider>
    );
}

export default App;