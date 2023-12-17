class Disc < ApplicationRecord
  belongs_to :user
  has_one_attached :image
  validates_presence_of :make, :model, :disc_type, :color, :weight
  validates_inclusion_of :disc_type, in: ["Distance Driver", "Fairway Driver", "Control Driver", "Midrange", "Putter"]
  validates :weight, numericality: true, length: { maximum: 3 }
  validates :image, content_type: { in: ['image/png', 'image/jpeg', 'image/jpg'], message: "file type must be .png, .jpeg, or .jpg"}, size: { less_than: 5.megabytes }

  before_create :set_finder_key

  private

  def img_url
    Rails.application.routes.url_helpers.rails_blob_path(image, only_path: true) if image.attached?
  end

  def set_finder_key
    self.finder_key = generate_key
  end

  def generate_key
    loop do
      token = SecureRandom.hex(4)

      break token unless Disc.where(finder_key: token).exists?
    end
  end

end
