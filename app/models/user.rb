class User < ApplicationRecord
  has_secure_password
  has_many :discs, dependent: :destroy
  has_many :scores, dependent: :destroy
  has_many :courses, through: :scores
  has_many :messages, dependent: :destroy

  before_save :format_username

  validates :username, presence: true, uniqueness: true, format: { with: /\A[a-zA-Z0-9]+\Z/ }

  private

  def format_username
    self.username = self.username.downcase
  end
  
end
