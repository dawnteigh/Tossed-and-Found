class Course < ApplicationRecord
  has_many :scores, dependent: :destroy
  has_many :users, through: :scores
  validates :name, presence: true
  validates :location, presence: true
end
