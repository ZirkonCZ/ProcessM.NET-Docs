import { Routes, Route, Link } from 'react-router-dom';
import DocPage from './components/DocPage';
import NavBar from './components/NavBar';

function App() {
    return (
        <div className="flex min-h-screen">
            <NavBar />
            <main className="flex-1 p-6">
            <Routes>
                <Route path="/" element={<DocPage file="intro.md" />} />
                <Route path="/usage" element={<DocPage file="usage.md" />} />
            </Routes>
            </main>
        </div>
    );
}

export default App;