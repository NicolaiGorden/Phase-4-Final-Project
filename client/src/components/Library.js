import React, { useState, useEffect } from 'react';
import Game from './Game';

function Library() {
    const [trending, setTrending] = useState([]);
    const [query, setQuery] = useState('')
    const [errorData, setErrorData] = useState([])
    const [searchResults, setSearchResults] = useState([])

    useEffect(() => {
        fetch('/games/trending')
        .then(res => {
            if (res.ok) {
                res.json().then(setTrending)
            } else {
                res.json().then( (err) => {setErrorData(err.errors)} )
            }
        })
    }, [])

    useEffect(() => {
        fetch(`/games/search/${query}`, {
            method: "GET",
            headers: {'Content-Type':'application/json'},
        }).then(res => {
            if (res.ok) {
                res.json().then(setSearchResults)
            } else {
                setSearchResults([])
                res.json().then( (err) => {setErrorData(err.errors)} )
            }
        })
    }, [query])

    function handleSearch(e) {
        setQuery(e.target.value)
    }

    return (
        <div class="library-wrapper">
            <div class="search-wrapper">
                <div class="search-input-space">
                    <input class="search-input" onChange={handleSearch} placeholder='Search Games...'></input>
                </div>
                <div class={searchResults[0] ? "search-results-wrapper" : "no-results-wrapper"}>
                    {searchResults[0] ? undefined : <div class="search-header-one">{'No Results :('}</div>}
                    {searchResults.map(e => {
                        return <Game image={e.art} id={e.id} name={e.name}/>
                    })}
                </div>
            </div>

            <div class="trending-games-wrapper">
                <div class="trending-header-space">
                    <div class="trending-header-one">5 Most Reviewed</div>
                </div>
                <div class="trending-games-subwrapper">
                    {trending.map(e => {
                        return <Game image={e.art} id={e.id} name={e.name}/>
                    })}
                </div>
            </div>

        </div>
    )

}

export default Library;

                // <Game image="https://www.giantbomb.com/a/uploads/original/8/82063/2896839-6215576118-SQ_3D.jpg"/>
                // <Game image="https://www.giantbomb.com/a/uploads/original/8/85465/2912120-81fez0skvll._ac_sl1500_.jpg"/>
                // <Game image="https://www.giantbomb.com/a/uploads/original/8/87790/3079288-box_al.png"/>
                // <Game image="https://www.giantbomb.com/a/uploads/original/8/87790/2108508-box_pm.png"/>
                // <Game image="https://www.giantbomb.com/a/uploads/original/8/87790/3103069-box_sts.png"/>