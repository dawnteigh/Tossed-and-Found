class CreateMessages < ActiveRecord::Migration[6.1]
  def change
    create_table :messages do |t|
      t.string :subject
      t.string :body
      t.string :to
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
