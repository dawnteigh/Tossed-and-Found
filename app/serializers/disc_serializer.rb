class DiscSerializer < ActiveModel::Serializer
  attributes :id, :color, :make, :model, :weight, :disc_type, :img, :user_id, :finder_key
  has_one :user
end
