import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import ReviewMini from './ReviewMini';

function GamePage() {
    const { gameId } = useParams();
    const [title, setTitle] = useState('')
    const [art, setArt] = useState('');
    const [reviews, setReviews] = useState([])
    const [averageScore, setAverageScore] = useState('')
    const [errorData, setErrorData] = useState("This game hasn't been reviewed yet.")

    useEffect(() => {
        fetch(`/games/${gameId}`)
        .then(res => {
            if (res.ok) {
                console.log(res)
                res.json().then(data => {
                    setArt(data.art)
                    setReviews(data.reviews)
                    setTitle(data.name)
                    setAverageScore(data.average_score)
                })
            } else {
                res.json().then( (err) => {setErrorData(err.error)} )
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
                <div class={averageScore ?"average-score":"no-score"}>
                    {averageScore ?
                        `${averageScore}/10`
                    :
                        "This game hasn't been scored yet."
                    }
                </div>
                <div class="button-space">
                    {/* if not logged in, show button that redirects to gate.
                    if logged in and have reviewed game, says 'update review' and loads previous review into form */}
                    <button class="review-button">+ New Review</button>
                </div>
            </div>

            <div class="game-reviews">
                <div class="reviews-header">Reviews</div>
                <div class="review-wrapper">
                    <div class="review-subwrapper">
                        {reviews[0] ?
                        reviews.map(e => {
                            return <ReviewMini title={e.title} body={e.body} reviewId={e.id} score={e.score}/>
                        })
                        :
                        <div class="no-review-message"> {errorData} </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GamePage;