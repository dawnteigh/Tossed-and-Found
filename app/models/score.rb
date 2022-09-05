class Score < ApplicationRecord
  belongs_to :user
  belongs_to :course
  validates_presence_of :strokes, :par
  validates_numericality_of :strokes, :par
end
