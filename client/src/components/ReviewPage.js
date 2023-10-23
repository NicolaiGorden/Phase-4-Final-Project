import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

function ReviewPage() {

    const { redirectGameId } = useParams()
    const { redirectReviewId } = useParams()

    return (
        <div class= "review-page-wrapper">
            <div class= "review-game-info">

            </div>

            <div class= "review-form">

            </div>
        </div>
    )
}

export default ReviewPage;