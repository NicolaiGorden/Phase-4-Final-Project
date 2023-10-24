import React, { useState, useEffect, useRef } from 'react';
import SelectSearch from 'react-select-search'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import fetchJsonp from 'fetch-jsonp'
import DropdownSearch from './DropdownSearch';
import DropdownList from './DropdownList';


function ReviewPage() {
    const { redirectGameGuid } = useParams()
    const { redirectReviewId } = useParams()

    const [currentGame, setCurrentGame] = useState({ guid: '', image: 'no game :(', name:'' })

    const [searchId, setSearchId] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const [input, setInput] = useState('')
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        fetchJsonp(
            `https://www.giantbomb.com/api/search/?api_key=96b1a2f459df7597812987b460af056962057bd6&format=jsonp&field_list=guid,name&resources=game&query="${input}"`,
            {jsonpCallback: 'json_callback'},
        ).then(res => {
            if(res.ok) {
                res.json().then(data => {
                    setSearchResults(data.results)
                })
            }
        })
    }, [input])

    useEffect(() => {
        if (redirectGameGuid) {
            fetchJsonp(
                `https://www.giantbomb.com/api/game/${redirectGameGuid}/?api_key=96b1a2f459df7597812987b460af056962057bd6&format=jsonp&field_list=image,guid,name`,
                {jsonpCallback: 'json_callback'},
            ).then(res => {
                if(res.ok) {
                    res.json().then(data => {
                        setCurrentGame(data.results)
                        setInput(data.results.name)
                    })
                }
            })
        }
    }, [])

    // useEffect(() => {
    //     fetchJsonp(
    //         `https://www.giantbomb.com/api/game/${redirectGameGuid}/?api_key=96b1a2f459df7597812987b460af056962057bd6&format=jsonp&field_list=image,guid,name`,
    //         {jsonpCallback: 'json_callback'},
    //     ).then(res => {
    //         if(res.ok) {
    //             res.json().then(data => {
    //                 setCurrentGame(data.results)
    //                 setInput(data.results.name)
    //             })
    //         }
    //     })  
    // }, [handleResultClick])
    
    const onSearchClick = () => {
        setIsOpen(true)
    }
        
    const handleChange = (value) => {
        setInput(value)
    }
    const handleResultClick = (e) => {
        setIsOpen(false)
        fetchJsonp(
            `https://www.giantbomb.com/api/game/${e.target.id}/?api_key=96b1a2f459df7597812987b460af056962057bd6&format=jsonp&field_list=image,guid,name`,
            {jsonpCallback: 'json_callback'},
        ).then(res => {
            if(res.ok) {
                res.json().then(data => {
                    setCurrentGame(data.results)
                    setInput(data.results.name)
                })
            }
        })  
    }
   
    return (
        <div class= "review-page-wrapper">
            <div class= "review-game-info">
            <div class="game-title">{currentGame.name}</div>
                <div class="game-big">
                    <img class="library-img-big" src={currentGame.image.original_url} alt={currentGame.name}/>
                </div>
            </div>

            <div class= "review-form">
                <form>
                    <div class="dropdown-container">
                        <DropdownSearch 
                            setResults={setSearchResults} 
                            handleChange={handleChange} 
                            input={input} 
                            onSearchClick={onSearchClick}
                        />
                        <DropdownList 
                            isOpen = {isOpen}
                            searchResults = {searchResults}
                            handleResultClick = {handleResultClick}
                            setIsOpen = {setIsOpen}
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ReviewPage;