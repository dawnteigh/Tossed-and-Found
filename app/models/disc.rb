class Disc < ApplicationRecord
  belongs_to :user
  validates :make, presence: true
  validates :model, presence: true
  validates :disc_type, presence: true
  validates :color, presence: true
  validates :weight, presence: true, numericality: true, length: { maximum: 3 }

  before_save :default_img

  private
  
  def default_img
    self.img = "https://www.discstore.com/media/catalog/product/cache/b56d745e38c1403eb862ceecfcf7dbaf/d/i/discgolf_mystery.jpg" if self.img.blank?
  end

end
