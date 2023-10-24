import React, { useState, useEffect } from 'react';
import { BiSearchAlt2 } from "react-icons/bi"
import fetchJsonp from 'fetch-jsonp'

function DropdownSearch({setResults, handleChange, input, onSearchClick}) {

    return (
        <div>
            <div class="input-wrapper">
                <BiSearchAlt2 size='1.5em'id="search-icon"/>
                <input 
                    class="game-search-input" 
                    placeholder="Search for games..."
                    value={input}
                    onChange={(e) => handleChange(e.target.value)}
                    onClick={(e) => onSearchClick(e)}
                />
            </div>
        </div>
    )
}

export default DropdownSearch;