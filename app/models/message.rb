class Message < ApplicationRecord
  belongs_to :user
  validates :body, presence: true, length: { in: 6..300 }
  validates :subject, presence: true, length: { maximum: 50 }
  validates :to, presence: true
end
