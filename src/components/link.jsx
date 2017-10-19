import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const Link = ({ filter, onClick }) => {
    // if (active) {
    //     return <span>{children}</span>;
    // }

    filter = filter.split(',');
    filter.unshift('');
    const handleClick = (e) => {
        e.preventDefault();
        onClick(e.target.value);
    };

    return (
        <select onChange={handleClick}>
            {_.map(filter, (value) => <option key={value}>{value}</option>)}
        </select>
    );
};

Link.propTypes = {
    filter: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Link;
