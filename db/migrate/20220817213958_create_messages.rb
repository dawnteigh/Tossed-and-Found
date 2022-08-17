class CreateMessages < ActiveRecord::Migration[6.1]
  def change
    create_table :messages do |t|
      t.string :text
      t.string :sender
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end