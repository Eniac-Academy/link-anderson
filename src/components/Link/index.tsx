import type React from 'react';
import './style.css';


interface LinkProps {
    link: string;
    text: string;
    tag: React.ReactNode;
}

function Link(props: LinkProps) {
    return (
        <a href={props.link} target="_blank" className="container-link">
            {props.tag}
            <p className='container-link-text'>{props.text}</p>
        </a>
    )
}

export default Link;