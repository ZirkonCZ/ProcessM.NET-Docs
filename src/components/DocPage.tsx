import {useEffect, useState, FC} from 'react';
import ReactMarkdown from 'react-markdown';

interface DocPageProps {
    file: string;
}

const DocPage: FC<DocPageProps> = ({ file }) => {
    const [content, setContent] = useState('');

    useEffect(() => {
        fetch(`docs/${file}`)
        .then((res) => res.text())
        .then((text) => setContent(text));
    }, [file]);

    return (
        <article className="prose dark:prose-invert max-w-none">
            <ReactMarkdown>{content}</ReactMarkdown>
        </article>
    );
};

export default DocPage;