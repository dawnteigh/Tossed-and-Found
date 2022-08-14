class CreateDiscs < ActiveRecord::Migration[6.1]
  def change
    create_table :discs do |t|
      t.string :make
      t.string :model
      t.string :color
      t.integer :weight
      t.string :finder_key
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
