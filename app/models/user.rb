class User < ApplicationRecord
    has_secure_password

    validates :username, presence: true, uniqueness: {message: "already belongs to another user!"}
    validate :password, :must_contain_uppercase

    has_many :reviews, dependent: :destroy
    has_many :games, through: :reviews

    def must_contain_uppercase
        if password != nil
            unless password.match(/[[:upper:]]/)
                errors.add(:password, message: "must contain uppercase character!")
            end
        end
    end
end
