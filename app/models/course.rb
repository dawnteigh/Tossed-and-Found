class Course < ApplicationRecord
  has_many :scores, dependent: :destroy
  has_many :users, through: :scores
  validates :name, presence: true
  validates :location, presence: true
  validates :holes, presence: true, numericality: true
end
