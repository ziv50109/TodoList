import React from 'react';
import PropTypes from 'prop-types';

const FilterBtn = (props) => (
    <button>
        {props.children}
    </button>
);

FilterBtn.propTypes = {
    children: PropTypes.node.isRequired,
};

export default FilterBtn;
