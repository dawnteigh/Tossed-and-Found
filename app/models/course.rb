class Course < ApplicationRecord
  has_many :scores, dependent: :destroy
  has_many :users, through: :scores
  validates_presence_of :name, :location, :holes
  validates_numericality_of :holes
  validates_uniqueness_of :location, scope: :name
  before_validation :format_strings

  def personal_best(user_id)
    self.scores.where(user_id: user_id).map{ |s| s.strokes - s.par }.min
  end

  def format_strings
    self.name = self.name.downcase
    self.location = self.location.downcase
  end

  def f_name
    self.name.titleize
  end

  def f_location
    if self.location.match(/, [a-z]{2}/)
      splocation = self.location.titleize.split
      formatted_array = splocation.map do |str|
        if str.size == 2
          str.upcase
        else
          str
        end
      end
      return formatted_array.join(' ')
    else
      return self.location.titleize
    end
  end

end
