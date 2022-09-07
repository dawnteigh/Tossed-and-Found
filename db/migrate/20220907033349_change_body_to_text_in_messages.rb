class ChangeBodyToTextInMessages < ActiveRecord::Migration[6.1]
  def change
    change_column(:messages, :body, :text)
  end
end
