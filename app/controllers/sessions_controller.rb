class SessionsController < ApplicationController
  skip_before_action :authorize

  def create
    user = User.find_by(username: params[:username])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user, status: :created
    else
      render json: { error: ["Incorrect username or password."] }, status: :unauthorized
    end
  end

  def destroy
    session.clear
  end

end
