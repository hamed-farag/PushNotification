import React from 'react';
import Link from 'react-router/lib/Link';

export default () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to={`/Todo`}>Home</Link>
                </li>
                <li>
                    <Link to={`/Todo/Todo`}>Todo Application</Link>
                </li>
            </ul>
        </div>
    );
}