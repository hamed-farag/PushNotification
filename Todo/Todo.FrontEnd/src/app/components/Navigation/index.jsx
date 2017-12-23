import React from 'react';
import Link from 'react-router/lib/Link';

import styles from  './styles.scss';

export default () => {
    return (
        <div className="NavigationContainer">
            <ul className="NavigationContainer__List">
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