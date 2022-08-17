class Disc < ApplicationRecord
  belongs_to :user

  validates :weight, numericality: true, length: { maximum: 3 }
end
