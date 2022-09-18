class DiscSerializer < ActiveModel::Serializer
  attributes :id, :color, :make, :model, :weight, :disc_type, :img, :user_id, :finder_key, :lost
  has_one :user

  def weight
    "#{self.object.weight}g"
  end
end
