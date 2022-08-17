class User < ApplicationRecord
  has_secure_password
  has_many :discs, dependent: :destroy
  has_many :scores
  has_many :courses, through: :scores
end
