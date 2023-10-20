class RemoveAverageScoreForNow < ActiveRecord::Migration[7.0]
  def change
    remove_column :games, :average_score
  end
end
