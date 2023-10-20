class UsersController < ApplicationController
    wrap_parameters format: []
    def index
        users = User.all
        render json: users, include: [:reviews, :games]
    end

    def show
        user = User.find_by(id: session[:user_id])
        if user
            render json:user
        else
            render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

    # ### FOR TESTING
    # def show
    #     user = User.find_by(id: params[:id])
    #     render json:user, include: [:reviews, :games]
    # end
    # ### FOR TESTING

    def create
        user = User.create(user_params)
        if user.valid?
            render json: user, status: :created
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation)
    end
end
