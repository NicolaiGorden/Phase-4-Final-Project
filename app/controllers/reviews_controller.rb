class ReviewsController < ApplicationController

    def index
        reviews = Review.all
        render json: reviews
    end

        # REMEMBER! when doing post for games and reviews, include your validations in /models/concerns.
        
end
