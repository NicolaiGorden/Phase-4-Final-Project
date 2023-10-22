import React, { useState, useEffect } from 'react';

function Game({image, id, name}) {
    //clicking on game should open dynamic route or whateva, see:
    //https://learning.flatironschool.com/courses/5652/assignments/208303?module_item_id=480174
    //https://www.youtube.com/watch?v=P5xgsRIKJjo

    return (
        <div class="game">
            <div class="title-card">
                <div class="title-text">{name}</div>
            </div>
            <img class="library-img" src={image} alt={name}/>
        </div>
    )
}

export default Game;