import { FC } from "react";

const SetupPage: FC = () => {
    return (
        <div className="article">
            <h1 className="h1">Setup ProcessM.NET</h1>
            <p className="par">
                To set up and run projects utilizing the ProcessM.NET library, particularly the associated web application, you will need certain prerequisites and follow specific steps.
            </p>
            <p className="par mb-4">
                Prerequisites:
            </p>
            <ul className="ul">
                <li>
                    <b>Repository</b> cloned on your machine: You need to obtain the source code for ProcessM.NET and its related projects. The source code modifications made during development are available in a public GitHub repository.
                </li>
                <li>
                    <b>Docker</b> installed: This is required if you plan to run the included web application locally using containerization.
                </li>
                <li>
                    <b>.NET framework</b> installed: As ProcessM.NET is a C# library built on the .NET framework, you will need a compatible .NET environment if you intend to use the library directly in your own .NET projects for development or building the included projects from source without Docker.
                </li>
            </ul>
                Running the Web Application Locally (using Docker):
                The ProcessM.NET repository includes a Docker setup (compose.yaml file is mentioned) designed to streamline running the web application.
                1.
                Ensure you have the repository cloned to your machine.
                2.
                Navigate to the root directory of the cloned repository.
                3.
                Run the command docker compose up -d. This command builds the Docker images for the web application's frontend and API and starts them as containers in 'detached' mode (in the background).
                4.
                Once the containers are running, the web application should be accessible via a web browser at http://localhost:8081.
                Using ProcessM.NET in Your Own .NET Project:
                If you wish to use the ProcessM.NET library programmatically in your own C#/.NET application, you would typically:
                1.
                Obtain the source code by cloning the repository.
                2.
                Reference the necessary ProcessM.NET library projects (Declarative, Imperative, Import, etc.) within your own .NET solution.
                3.
                Utilize the classes and methods provided by the library to perform process mining operations (see the Usage page draft for a typical workflow).
            </p>
        </div>
    );
}

export default SetupPage;