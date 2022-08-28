class CreateScores < ActiveRecord::Migration[6.1]
  def change
    create_table :scores do |t|
      t.integer :strokes
      t.integer :par
      t.integer :user_id
      t.integer :course_id

      t.timestamps
    end
  end
end
