class UsersController < ApplicationController
    wrap_parameters format: []
    def index
        users = User.all
        render json: users
    end

    def create
        byebug
        user = User.create(user_params)
        if user.valid?
            render json: user, status: :created
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private

    def user_params
        params.permit(:username, :password)
    end
end
