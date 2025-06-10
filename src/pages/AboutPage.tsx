import { FC } from 'react';

const AboutPage: FC = () => {
    return (
        <div className="max-w-2xl mx-auto p-8">
            <h1 className="text-3xl font-bold mb-4">About ProcessM.NET</h1>
            <p className="mb-6">
                ProcessM.NET is a documentation and process management tool designed to help teams organize, track, and improve their workflows.
            </p>
            <h2 className="text-2xl font-semibold mb-2">Features</h2>
            <ul className="list-disc list-inside mb-6 space-y-1">
                <li>Centralized documentation</li>
                <li>Process tracking</li>
                <li>Collaboration tools</li>
                <li>Customizable workflows</li>
            </ul>
            <h2 className="text-2xl font-semibold mb-2">Contact</h2>
            <p>
                For more information, please contact us at{' '}
                <a
                    href="mailto:support@processm.net"
                    className="text-blue-600 hover:underline"
                >
                    support@processm.net
                </a>.
            </p>
        </div>
    );
};

export default AboutPage;