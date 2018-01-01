import * as React from 'react';
import { SFC } from 'react';
import './BadHeader.css';

interface HeaderProps {
    level?: '1' | '2' | '3';
}

const BadHeader: SFC<HeaderProps> = ({ level = '1', children }) => {
    const Tag = `h${level}`;
    return <Tag className={`BadHeader BadHeader_level_${level}`}>
            {children}
        </Tag>;
};

export default BadHeader;
