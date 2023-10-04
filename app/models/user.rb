class User < ApplicationRecord
    has_secure_password
    validates :username, uniqueness: {message: "already belongs to another user!"}
    validate :password, :must_contain_uppercase

    def must_contain_uppercase
        unless password.match(/[[:upper:]]/)
            errors.add(:password, message: "Must contain uppercase character!")
        end
    end

end
