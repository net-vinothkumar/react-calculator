import React from 'react';
import PropTypes from 'prop-types';

const Number = ({value, onClick, children}) => (
    <button value={value} onClick={(e) => onClick(e)}>{children}</button>
);

Number.propType = {
    value: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
};

export default Number;