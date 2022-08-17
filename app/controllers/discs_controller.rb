class DiscsController < ApplicationController

  def index
  end

  def show
  end

  def create
    disc = current_user.discs.create(disc_params)
    disc.update(finder_key: Random.hex(3))
    render json: disc, status: :created
  end

  def update
  end

  def destroy
  end

  private
  
  def disc_params
    params.permit(:make, :model, :color, :weight, :disc_type, :img)
  end

end
