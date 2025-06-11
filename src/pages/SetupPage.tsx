import { FC } from "react";

const SetupPage: FC = () => {
    return (
        <div className="article">
            <h1 className="h1">Run ProcessM.NET locally</h1>
            
            <h2 className="h2">Prerequisites</h2>
            <ul className="ul">
                <li className="li">
                    <a href="https://github.com/lasaris/ProcessM.NET" className="hyperlink">ProcessM.NET repository</a> cloned on your machine
                </li>
                <li className="li">
                    <a href="https://www.docker.com/get-started/" className="hyperlink">Docker</a> installed
                </li>
            </ul>

            <h2 className="h2">Steps</h2>
            <ol className="ol">
                <li className="li">
                    In the root directory run <code>docker compose up -d</code>. This creates the docker containers and runs them in 'detached' mode.
                </li>
                <li className="li">
                    Go to http://localhost:8081 and <b>start mining!</b>
                </li>
            </ol>
        </div>
    );
}

export default SetupPage;