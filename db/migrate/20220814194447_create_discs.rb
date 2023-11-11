class CreateDiscs < ActiveRecord::Migration[6.1]
  def change
    create_table :discs do |t|
      t.string :make
      t.string :model
      t.string :color
      t.integer :weight
      t.string :disc_type
      t.string :img, default: "/TandFicon.png"
      t.string :finder_key
      t.boolean :lost, default: false
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
