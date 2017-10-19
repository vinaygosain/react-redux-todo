import React from 'react';
import FilterLink from '../container/filterLink';

const Footer = () => (
    <p>
        Show:
        {' '}
        <FilterLink filter="SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED">
            All
        </FilterLink>

    </p>
);

export default Footer;
