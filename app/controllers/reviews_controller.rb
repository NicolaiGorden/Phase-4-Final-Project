class ReviewsController < ApplicationController

    def index
        reviews = Review.all
        render json: reviews
    end

    def show
        review = Review.find_by(id: params[:id])
        render json:review, include: [:game, :user]
    end  
    # FOR SCORING AVERAGE
    # https://learning.flatironschool.com/courses/5652/assignments/208267?module_item_id=480092
end
