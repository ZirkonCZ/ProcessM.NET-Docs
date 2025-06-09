import { Routes, Route, Link } from 'react-router-dom';
import DocPage from './components/DocPage';
import DocsPage from '@/pages/DocsPage';
import NavBar from './components/NavBar';

function App() {
    return (
        <div className="min-h-screen">
        <NavBar />
            <main className="flex-1 p-6">
            <Routes>
                <Route path="/" element={<DocPage file="intro.md" />} />
                <Route path="/about" element={<DocPage file="about.md" />} />
                <Route path="/setup" element={<DocPage file="setup.md" />} />
                <Route path="/sidebar" element={<DocsPage />} />
            </Routes>
            </main>
        </div>
    );
}

export default App;