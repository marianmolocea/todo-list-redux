import React from 'react';

import { setVisibilityFilter, VisibilityFilter } from './visibilityFilterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/rootReducer';

interface FilterButtonProps {
    visibilityFilter: VisibilityFilter,
    text: string
}

const FilterButton = ({ visibilityFilter, text }: FilterButtonProps): JSX.Element => {
    const dispatch = useDispatch();

    const currentVisibilityFilter = useSelector((state: RootState) => state.visibilityFilter)
    return (
        <button
            disabled={currentVisibilityFilter === visibilityFilter}
            onClick={() => dispatch(setVisibilityFilter(visibilityFilter))}
        >
            {text}
      </button>
    )
}

export default FilterButton
