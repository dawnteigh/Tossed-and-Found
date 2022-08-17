class User < ApplicationRecord
  has_secure_password
  has_many :discs, dependent: :destroy
  has_many :scores
  has_many :courses, through: :scores
  has_many :messages, dependent: :destroy

  validates :username, presence: true, uniqueness: true, format: { with: /\A[a-zA-Z0-9]+\Z/ }
end
