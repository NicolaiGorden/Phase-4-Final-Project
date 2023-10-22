import React, { useState, useEffect } from 'react';

function ReviewMini({title, body, userId}) {

    return (
        <div class="review">
            <div class="review-title-and-user">
                "{title}" by {userId}
            </div>
            <div class="review-body">
                {body}
            </div>
        </div>
    )
}

export default ReviewMini;
