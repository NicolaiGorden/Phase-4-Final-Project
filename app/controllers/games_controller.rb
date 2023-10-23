class GamesController < ApplicationController

    def index
        games = Game.all
        render json: games
    end

    def show
        game = Game.find_by(id: params[:id])

        if game
            render json:game, include: [:reviews], methods: [:average_score]
        else
            render json: { error: "This game does not exist." }, status: :not_found
        end
        
    end

    def trending
        games = Game.all.sort_by{|game| game.reviews.length}.reverse.take(5)
        render json: games
    end

    def search
        games = Game.all.select{|game| game.name.downcase.include?(params[:query].downcase)}.take(10)
        render json: games
    end

    def blank_query
        games = Game.all.shuffle.take(10)
        render json: games
    end

    # REMEMBER! when doing post for games and reviews, include your validations in /models/concerns.

end
