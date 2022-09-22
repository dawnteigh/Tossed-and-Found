class DiscsController < ApplicationController

  # def index
  #   if current_user
  #     render json: current_user.discs, status: :ok
  #   else
  #     unauthorized
  #   end
  # end

  # def show
  #   if current_user
  #     disc = current_user.discs.find_by(id: params[:id])
  #     if disc
  #       render json: disc, status: :ok
  #     else
  #       not_found "disc"
  #     end
  #   else
  #     unauthorized
  #   end
  # end

  def create
    if current_user
      disc = current_user.discs.create!(disc_params)
      disc.update(finder_key: Random.hex(3))
      render json: disc, status: :created
    else
      unauthorized
    end
  end

  def update
    if current_user
      disc = current_user.discs.find_by(id: params[:id])
      if disc
        disc.update!(disc_params)
        render json: disc, status: :ok
      else
        not_found "disc"
      end
    else
      unauthorized
    end
  end

  def destroy
    if current_user
      disc = current_user.discs.find_by(id: params[:id])
      if disc
        disc.destroy
        head :no_content
      else
        not_found "disc"
      end
    else
      unauthorized
    end
  end

  def tossed_and_found
    if current_user
      disc = Disc.find_by(finder_key: params[:key])
      if disc
        render json: disc, status: :ok
      else
        not_found "disc"
      end
    else
      unauthorized
    end
  end

  private
  
  def disc_params
    params.permit(:make, :model, :color, :weight, :disc_type, :img, :lost)
  end

end
