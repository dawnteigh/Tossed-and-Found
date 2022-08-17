class UsersController < ApplicationController

  def show
    if current_user
      render json: current_user, status: :ok
    else
      render json: { error: "Not authorized" }, status: :unauthorized
    end
  end

  def create
  end

  def update
  end

  private

  def user_params
    params.permit(:username, :password_digest)
  end

end
