class AddUserIdGameIdToReviews < ActiveRecord::Migration[7.0]
  def change
    add_column :reviews, :user_id, :string
    add_column :reviews, :game_id, :string
  end
end
