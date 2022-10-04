class DiscsController < ApplicationController

  # def index
  #   render json: current_user.discs, status: :ok
  # end

  # def show
  #   disc = current_user.discs.find_by(id: params[:id])
  #   if disc
  #     render json: disc, status: :ok
  #   else
  #     not_found "disc"
  #   end
  # end

  def create
    disc = current_user.discs.create!(disc_params)
    disc.update(finder_key: Random.hex(3))
    render json: disc, status: :created
  end

  def update
    disc = current_user.discs.find_by(id: params[:id])
    if disc
      disc.update!(disc_params)
      render json: disc, status: :ok
    else
      not_found "disc"
    end
  end

  def destroy
    disc = current_user.discs.find_by(id: params[:id])
    if disc
      disc.destroy
      head :no_content
    else
      not_found "disc"
    end
  end

  def tossed_and_found
    disc = Disc.find_by(finder_key: params[:key])
    if disc
      render json: disc, status: :ok
    else
      not_found "disc"
    end
  end

  private
  
  def disc_params
    params.permit(:make, :model, :color, :weight, :disc_type, :img, :lost)
  end

end
