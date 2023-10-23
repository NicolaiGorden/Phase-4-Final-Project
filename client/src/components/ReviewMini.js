import React, { useState, useEffect } from 'react';

function ReviewMini({title, body, reviewId, score}) {

    const [userId, setUserId] = useState('')
    const [username, setUsername] = useState('')
    const [errorData, setErrorData] = useState([])
    const [scoreNum, setScoreNum] = useState('')
    
    useEffect(() => {
        fetch(`/reviews/${reviewId}`)
        .then(res => {
            if (res.ok) {
                res.json().then(data => {
                    setUsername(data.user.username)
                    setUserId(data.user.id)
                })
            } else {
                res.json().then( (err) => {setErrorData(err.errors)} )
            }
        })
    }, [])

    return (
        <div class="review">
            <div class="review-title-and-user">
                <div class="rvtitle">
                    "{title}" by&nbsp;<a class="review-link">{username}</a>
                </div>
                <div class="rvscore">{score}/10</div>
            </div>
            <div class="review-body-wrapper">
                <div class="review-body">
                    {body}
                </div>
            </div>
        </div>
    )
}

export default ReviewMini;
