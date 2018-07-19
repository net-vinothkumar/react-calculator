import React from 'react';
import PropTypes from 'prop-types';

const Add = ({value, onClick, children}) => (
    <button value={value} onClick={(e) => onClick(e)}>{children}</button>
);

Add.propType = {
    value: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
};

export default Add;