class DiscSerializer < ActiveModel::Serializer
  attributes :id, :color, :make, :model, :weight, :disc_type, :img, :user_id, :finder_key, :lost

  def weight
    "#{object.weight}g"
  end

  def img
    if object.image.attached?
      return object.img_url
    else
      return object.img
    end
  end

end
