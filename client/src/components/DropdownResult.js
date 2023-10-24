import React, { useState, useEffect } from 'react';

function DropdownResult({result, handleResultClick, setIsOpen}) {

    return (
        <div
            class="dropdown-search-result"
            id={result.guid}
            onClick={(e) => {
                handleResultClick(e)
            }}
        >
            {result.name}
        </div>
    )
}

export default DropdownResult;