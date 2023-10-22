class GamesController < ApplicationController

    def index
        games = Game.all
        render json: games
    end

    def trending
        games = Game.all.sort_by{|game| game.reviews.length}.take(5)
        render json: games
    end

    def search
        games = Game.all.select{|game| game.name.downcase.include?(params[:query].downcase)}
        render json: games
    end

    # REMEMBER! when doing post for games and reviews, include your validations in /models/concerns.

end
