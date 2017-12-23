import React from 'react';
import Link from 'react-router/lib/Link';

import styles from './styles.scss';

export default ({ user, message, type = 'info' }) => {
    return (
        <div className={`ToastrContainer ToastrContainer__Type--${type}`}>

        </div>
    );
}