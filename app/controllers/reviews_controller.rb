class ReviewsController < ApplicationController

    def index
        reviews = Review.all
        render json: reviews
    end

    def show
        review = Review.find_by(id: params[:id])
        render json:review, include: [:game, :user], except: [:created_at, :updated_at]
    end
    
end
