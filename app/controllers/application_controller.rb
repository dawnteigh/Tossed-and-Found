class ApplicationController < ActionController::API
  include ActionController::Cookies

  private
  
  def current_user
    User.find_by(id: session[:user_id])
  end

  def unauthorized
    render json: { error: "Please log in or sign up to continue." }, status: :unauthorized
  end

  def not_found(obj)
    render json: { error: "There is no such #{obj} in the database!" }, status: :not_found
  end

end
