import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import ReviewMini from './ReviewMini';

function GamePage() {
    const { gameId } = useParams();
    const [title, setTitle] = useState('')
    const [art, setArt] = useState('');
    const [reviews, setReviews] = useState([])
    const [errorData, setErrorData] = useState('')

    useEffect(() => {
        fetch(`/games/${gameId}`)
        .then(res => {
            if (res.ok) {
                res.json().then(data => {
                    setArt(data.art)
                    setReviews(data.reviews)
                    setTitle(data.name)
                })
            } else {
                res.json().then( (err) => {setErrorData(err.errors)} )
            }
        })
    },[])

    return (
        <div class="game-page-wrapper">
            <div class="game-info">
                <div class="game-title">{title}</div>
                <div class="game-big">
                    <img class="library-img-big" src={art} alt={title}/>
                </div>
            </div>
            <div class="game-reviews">
                <div class="review-wrapper">
                    <div class="review-subwrapper">
                        {reviews ?
                        reviews.map(e => {
                            return <ReviewMini title={e.title} body={e.body} userId={e.userId} />
                        })
                        :
                        <div> no reviews </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GamePage;