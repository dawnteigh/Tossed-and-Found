class UsersController < ApplicationController
  skip_before_action :authorize, only: [:create]

  def show
    render json: current_user, status: :ok
  end

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  def update
    current_user.update!(user_params)
    render json: current_user, status: :ok
  end

  private

  def user_params
    params.permit(:username, :password, :password_confirmation)
  end

end
