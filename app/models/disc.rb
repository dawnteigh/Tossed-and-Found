class Disc < ApplicationRecord
  belongs_to :user
  validates_presence_of :make, :model, :disc_type, :color, :weight
  validates_inclusion_of :disc_type, in: ["Distance Driver", "Fairway Driver", "Control Driver", "Midrange", "Putter"]
  validates :weight, numericality: true, length: { maximum: 3 }

  has_one_attached :image

  def img_url
    Rails.application.routes.url_helpers.rails_blob_path(image, only_path: true) if image.attached?
  end

end
