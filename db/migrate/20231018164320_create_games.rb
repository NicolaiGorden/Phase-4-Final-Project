class CreateGames < ActiveRecord::Migration[7.0]
  def change
    create_table :games do |t|
      t.string :guid
      t.string :name
      t.string :art
      t.float :average_score

      t.timestamps
    end
  end
end
