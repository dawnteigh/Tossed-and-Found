class Course < ApplicationRecord
  has_many :scores, dependent: :destroy
  has_many :users, through: :scores
  validates_presence_of :name, :location, :holes
  validates_numericality_of :holes

  def personal_best(user_id)
    self.scores.where(user_id: user_id).map{ |s| s.strokes - s.par }.min
  end

end
