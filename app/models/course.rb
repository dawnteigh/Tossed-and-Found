class Course < ApplicationRecord
  has_many :scores, dependent: :destroy
  has_many :users, through: :scores
  validates_presence_of :name, :location, :holes
  validates_numericality_of :holes
end
