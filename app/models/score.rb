class Score < ApplicationRecord
  belongs_to :user
  belongs_to :course
  validates :strokes, presence: true, numericality: true
end