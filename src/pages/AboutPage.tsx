import { FC } from 'react';

const AboutPage: FC = () => {
    return (
        <div className="article">
            <h1 className="h1">What is ProcessM.NET?</h1>
            <h2 className="h2">Overview</h2>
            <p className="p">
                <b>ProcessM.NET</b> is a <b>C# library</b> designed to support basic process mining algorithms within the <b>.NET framework</b>. It is an open-source project released under the <b>GPL-3.0 license.</b>
            </p>
            <p className="p">
                The library is intended for use primarily in academia and is being developed with future applications in industry in mind. The development is carried out by the <a href="https://lasaris.fi.muni.cz" className="hyperlink">Lab of Software Architectures and Information Systems</a>, or as an abbreviation: Lasaris lab, Faculty of Informatics, Masaryk University.
            </p>
            <p className="p">
                ProcessM.NET provides functionalities for core process mining concepts, including <b>process discovery and conformance checking</b>. It implements both imperative and declarative process mining approaches. Specific algorithms supported include the <b>Alpha algorithm</b>, Heuristic miner for imperative discovery, and <b>Optimal alignments</b> for imperative conformance checking. For declarative process mining, it supports discovery and conformance checking based on the <b>DECLARE Language</b> and its templates.
            </p>
            <h2 className="h2">Functionalities Supported</h2>
            <ul className="ul">
                <li className="li">
                    <b>Imperative Process Mining:</b> This includes algorithms for process discovery, such as the Alpha algorithm and the Heuristic miner, and conformance checking, like Optimal Alignments. Imperative models explicitly define observed behaviors.
                </li>
                <li className="li">
                    <b>Declarative Process Mining:</b> This approach focuses on generating constraint-based models. The library supports declarative discovery to identify template constraints present in event logs and declarative conformance checking to evaluate how well a trace aligns with a DECLARE model by analyzing constraint activations.
                </li>
                <li className="li">
                    <b>Event Log Import:</b> The library includes functionality for parsing event logs, specifically from CSV files. This was a custom C# library developed to replace a third-party package.
                </li>
            </ul>
            <p className="p">
                ProcessM.NET focuses on transforming event logs into graphical representations, known as process models, to help analyze, understand, and optimize operations. It also enables organizations to perform conformance checking to ensure real-world processes align with existing models.
            </p>
        </div>
    );
};

export default AboutPage;