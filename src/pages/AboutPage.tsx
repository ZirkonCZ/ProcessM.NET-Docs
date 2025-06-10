import {FC} from 'react';

const AboutPage: FC = () => {
    return (
        <div style={{ padding: '2rem' }}>
            <h1>About ProcessM.NET</h1>
            <p>
                ProcessM.NET is a documentation and process management tool designed to help teams organize, track, and improve their workflows.
            </p>
            <h2>Features</h2>
            <ul>
                <li>Centralized documentation</li>
                <li>Process tracking</li>
                <li>Collaboration tools</li>
                <li>Customizable workflows</li>
            </ul>
            <h2>Contact</h2>
            <p>
                For more information, please contact us at <a href="mailto:support@processm.net">support@processm.net</a>.
            </p>
        </div>
    );
};

export default AboutPage;