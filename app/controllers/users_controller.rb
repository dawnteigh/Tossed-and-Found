class UsersController < ApplicationController

  def show
    if current_user
      render json: current_user, status: :ok
    else
      render json: { error: "Not authorized" }, status: :unauthorized
    end
  end

end
