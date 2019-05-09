import React, { useContext } from 'react';
import Context from "../context";
import PropTypes from 'prop-types';

const FilterBtn = (props) => {
    const { filter, handleChangeFilter } = useContext(Context);

    return (
        <button
            type="button"
            disabled={filter === props.filterAction}
            onClick={() => handleChangeFilter(props.filterAction)}
        >
            {props.children}
        </button>
    );
}

FilterBtn.propTypes = {
    children: PropTypes.node.isRequired,
};

export default FilterBtn;
