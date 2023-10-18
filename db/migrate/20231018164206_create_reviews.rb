class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.string :title
      t.string :body
      t.integer :likes

      t.timestamps
    end
  end
end
