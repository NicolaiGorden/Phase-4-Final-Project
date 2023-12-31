import React, { useState, useEffect, useRef, useContext } from 'react';
import SelectSearch from 'react-select-search'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import fetchJsonp from 'fetch-jsonp'
import DropdownSearch from './DropdownSearch';
import DropdownList from './DropdownList';
import { LoginContext } from '../App';


function ReviewPage() {
    const { redirectGameGuid } = useParams()

    const [user, setUser] = useContext(LoginContext)
    const [myLibrary, setMyLibrary] = useState([])
    const [currentGame, setCurrentGame] = useState({ guid: '', image: 'no game :(', name:'' })

    const [input, setInput] = useState('')
    const [titleInput, setTitleInput] = useState('')
    const [bodyInput, setBodyInput] = useState('')
    const [score, setScore] = useState(1)
    const [searchResults, setSearchResults] = useState([])

    const [isOpen, setIsOpen] = useState(false)
    const [userOwnsGame, setUserOwnsGame] = useState(false)

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

    useEffect(() => {
        if (user) {
        setMyLibrary(user.games.map((e)=>e.guid))
        }
    },[user])

    useEffect(() => {
        if(myLibrary.includes(currentGame.guid)) {
            const gameIdRef = user.games.find((e) => e.guid === currentGame.guid).id
            const myReview = user.reviews.find((e) => e.game_id === gameIdRef)
            console.log(myReview)
            setUserOwnsGame(true)
            setBodyInput(myReview.body)
            setTitleInput(myReview.title)
            setScore(myReview.score)

        }
    }, [currentGame])
    
    const onSearchClick = () => {
        setIsOpen(true)
    }
        
    const handleChange = (value) => {
        setInput(value)
    }

    const handleTitleChange = (value) => {
        setTitleInput(value)
    }

    const handleBodyChange = (value) => {
        setBodyInput(value)
    }

    const handleScoreChange = (value) => {
        setScore(value)
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
                    setTitleInput('')
                    setBodyInput('')
                    setScore(1)
                    setUserOwnsGame(false)
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

            <div class= "review-form-wrapper">
                <form class= "review-form">
                    <label class="review-label">Search for a game:</label>         
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
                    <label class="review-label">Name your review:</label>
                    <div class="title-input-wrapper">
                        <input 
                            class="title-input"
                            placeholder="Enter Review Title"
                            value={titleInput}
                            onChange={(e) => handleTitleChange(e.target.value)}
                        />

                    </div>
                    <label class="review-label">Review:</label>
                    <div class="body-input-wrapper">
                        <textarea 
                            class="body-input"
                            placeholder= {`Thoughts on ${currentGame.name}? (280 chars max.)`}
                            value={bodyInput}
                            onChange={(e) => handleBodyChange(e.target.value)}
                        />
                    </div>
                    <label class="score-label">Score:</label>
                    <select value={score} class="score-select" onChange={(e) => handleScoreChange(e.target.value)}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>

                    <button class="post-review-button">{userOwnsGame ? 'Update Review' : 'Post Review'}</button>

                </form>
            </div>
        </div>
    )
}

export default ReviewPage;