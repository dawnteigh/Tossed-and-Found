class CreateDiscs < ActiveRecord::Migration[6.1]
  def change
    create_table :discs do |t|
      t.string :make
      t.string :model
      t.string :color
      t.integer :weight
      t.string :disc_type
      t.string :img, default: "https://www.discstore.com/media/catalog/product/cache/b56d745e38c1403eb862ceecfcf7dbaf/d/i/discgolf_mystery.jpg"
      t.string :finder_key
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
