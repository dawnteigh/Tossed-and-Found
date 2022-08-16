class DiscsController < ApplicationController

  def create
    disc = current_user.discs.create(disc_params)
    disc.update(finder_key: SecureRandom.hex(3))
    render json: disc, status: :created
  end

  private

  def current_user
    User.find_by(id: session[:user_id])
  end
  
  def disc_params
    params.permit(:make, :model, :color, :weight, :disc_type, :img)
  end

end
