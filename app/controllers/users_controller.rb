class UsersController < ApplicationController
    wrap_parameters format: []
    def index
        users = User.all
        render json: users
    end

    def create
        user = User.create!(user_params)
        byebug
        render json: user
    end

    private

    def user_params
        params.permit(:username, :password)
    end
end
