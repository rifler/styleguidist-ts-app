import * as React from 'react';
import { Component } from 'react';
import './GoodHeader.css';

interface HeaderProps {
    level?: '1' | '2' | '3';
}

export default class GoodHeader extends Component<HeaderProps, {}> {

    render () {
        const { level = '1', children } = this.props;
        const Tag = `h${level}`;

        return <Tag className={`GoodHeader GoodHeader_level_${level}`}>
                {children}
            </Tag>;
    }

}
