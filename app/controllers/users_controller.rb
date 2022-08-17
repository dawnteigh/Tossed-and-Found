class UsersController < ApplicationController

  def show
    if current_user
      render json: current_user, status: :ok
    else
      unauthorized
    end
  end

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  def update
    if current_user
      current_user.update!(user_params)
      render json: current_user, status: :ok
    else
      unauthorized
    end
  end

  private

  def user_params
    params.permit(:username, :password, :password_confirmation)
  end

end
