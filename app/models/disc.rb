class Disc < ApplicationRecord
  belongs_to :user
  validates_presence_of :make, :model, :disc_type, :color, :weight
  validates_inclusion_of :disc_type, in: ["Distance Driver", "Fairway Driver", "Control Driver", "Midrange", "Putter"]
  validates :weight, numericality: true, length: { maximum: 3 }

  before_save :default_img

  private
  
  def default_img
    self.img = "https://www.discstore.com/media/catalog/product/cache/b56d745e38c1403eb862ceecfcf7dbaf/d/i/discgolf_mystery.jpg" if self.img.blank?
  end

end
