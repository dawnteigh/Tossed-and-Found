class DiscSerializer < ActiveModel::Serializer
  attributes :id, :make, :model, :color, :weight
  has_one :user
end
