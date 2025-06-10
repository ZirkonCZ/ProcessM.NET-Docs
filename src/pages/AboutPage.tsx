import { FC } from 'react';

const AboutPage: FC = () => {
    return (
        <div className="article">
            <h1 className="h1">What is ProcessM.NET?</h1>
            <p className="p">
                <b>ProcessM.NET</b> is a <b>C# library</b> designed to support basic process mining algorithms within the <b>.NET framework</b>. It is an open-source project released under the <b>GPL-3.0 license.</b>
            </p>
            <p className="p">
                The library is intended for use primarily in academia and is being developed with future applications in industry in mind. The development is carried out by the Faculty of Informatics at Masaryk University.
            </p>
            <p className="p">
                ProcessM.NET provides functionalities for core process mining concepts, including <b>process discovery and conformance checking</b>. It implements both imperative and declarative process mining approaches. Specific algorithms supported include the <b>Alpha algorithm</b>, Heuristic miner for imperative discovery, and <b>Optimal alignments</b> for imperative conformance checking. For declarative process mining, it supports discovery and conformance checking based on the <b>DECLARE Language</b> and its templates.
            </p>
            <p className="p mb-4">
                Several projects utilize or are built upon the ProcessM.NET library:
            </p>
            <ul className="ul">
                <li>
                    A <b>free, web-based process mining application</b> was developed leveraging the library to make its algorithms accessible and easy to use, integrating key process mining algorithms and prioritizing accessibility and ease of use.</li>
                <li>
                    A new <b>C# event log generation library</b> called <b>PELGen</b> was created to produce authentic datasets, which was also published by the <a href="https://lasaris.fi.muni.cz" className="hyperlink">Faculty of Informatics, Masaryk University, Lab of Software Architectures and Information Systems.</a>
                </li>
            </ul>
            <p className="p">
                ProcessM.NET focuses on transforming event logs into graphical representations, known as process models, to help analyze, understand, and optimize operations. It also enables organizations to perform conformance checking to ensure real-world processes align with existing models.
            </p>
        </div>
    );
};

export default AboutPage;