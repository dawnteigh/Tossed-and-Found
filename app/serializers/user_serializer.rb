class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_many :scores
  has_many :discs
  has_many :messages
  has_many :courses
end
