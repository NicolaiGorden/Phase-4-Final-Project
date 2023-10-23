class Game < ApplicationRecord
    has_many :reviews, dependent: :destroy
    has_many :users, through: :reviews

    def average_score
        scores = reviews.map { |rev| rev.score }
        scores.inject{ |sum, el| sum + el }.to_f / scores.size
    end
end
