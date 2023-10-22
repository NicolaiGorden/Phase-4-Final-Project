import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Game({image, id, name}) {
    const history = useHistory()

    function onGameClick(e) {
        e.preventDefault()
        history.push(`/game/${id}`)
    }

    return (
        <div onClick={onGameClick}class="game">
            <div class="title-card">
                <div class="title-text">{name}</div>
            </div>
            <img class="library-img" src={image} alt={name}/>
        </div>
    )
}

export default Game;