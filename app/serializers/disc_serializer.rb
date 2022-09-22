class DiscSerializer < ActiveModel::Serializer
  attributes :id, :color, :make, :model, :weight, :disc_type, :img, :user_id, :finder_key, :lost
  belongs_to :user

  def weight
    "#{object.weight}g"
  end
end
