import React, { useState, useEffect, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { LoginContext } from '../App';
import ReviewMini from './ReviewMini';

function GamePage() {
    const history = useHistory();
    const [user, setUser] = useContext(LoginContext);
    const [myLibrary, setMyLibrary] = useState([])
     
    const { gameId } = useParams();
    const [title, setTitle] = useState('');
    const [art, setArt] = useState('');
    const [reviews, setReviews] = useState([]);
    const [averageScore, setAverageScore] = useState('');
    const [guid, setGuid] = useState('');
    const [errorData, setErrorData] = useState("This game hasn't been reviewed yet.");
    const [userOwnsGame, setUserOwnsGame] = useState(false);

    useEffect(() => {
        if (user) {
        setMyLibrary(user.games.map((e)=>e.guid))
        }
    },[user])

    useEffect(() => {
        if(myLibrary.includes(guid)) {
            setUserOwnsGame(true)
        }
    }, [guid, user])

    useEffect(() => {
        fetch(`/games/${gameId}`)
        .then(res => {
            if (res.ok) {
                res.json().then(data => {
                    setArt(data.art)
                    setReviews(data.reviews)
                    setTitle(data.name)
                    setAverageScore(data.average_score)
                    setGuid(data.guid)
                })
            } else {
                res.json().then( (err) => {setErrorData(err.error)} )
            }
        })
    },[])

    function handleNewReview() {
        history.push(`/newreview/${guid}`)
    }

    return (
        <div class="game-page-wrapper">
            <div class="game-info">
                <div class="game-title">{title}</div>
                <div class="game-big">
                    <img class="library-img-big" src={art} alt={title}/>
                </div>
                <div class={averageScore ?"average-score":"no-score"}>
                    {averageScore ?
                        `User Rating: ${averageScore}/10`
                    :
                        "This game hasn't been scored yet."
                    }
                </div>
                <div class="button-space">
                    {/* if not logged in, show button that redirects to gate.
                    if logged in and have reviewed game, says 'update review' and loads previous review into form */}
                    <button onClick={handleNewReview} class="review-button">{userOwnsGame ? "Update My Review" : "New Review"}</button>
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