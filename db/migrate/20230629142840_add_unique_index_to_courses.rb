class AddUniqueIndexToCourses < ActiveRecord::Migration[6.1]
  def change
    add_index :courses, [:name, :location], unique: true
  end
end
