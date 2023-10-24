import React, { useState, useEffect, useRef } from 'react';
import DropdownResult from './DropdownResult';

function DropdownList({searchResults, isOpen, setIsOpen, handleResultClick}) {

    const dropDownRef = useRef();

    useEffect(() => {
        document.addEventListener("mousedown", (event) => {
            if (!dropDownRef.current.contains(event.target)) {
                setIsOpen(false)
            }
        })
    })

    return (
        <div ref={dropDownRef} class={isOpen ? "dropdown-results-active" : "dropdown-results-inactive"}>
            {searchResults.map((result) => {
                return <DropdownResult 
                            id={result.guid} 
                            result={result} 
                            handleResultClick={handleResultClick}
                            setIsOpen={setIsOpen}
                        />
            })}
        </div>
    )
}

export default DropdownList