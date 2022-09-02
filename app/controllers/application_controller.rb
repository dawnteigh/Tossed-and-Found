class ApplicationController < ActionController::API
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordInvalid, with: :invalid_response

  private
  
  def current_user
    User.find_by(id: session[:user_id])
  end

  def unauthorized
    render json: { error: ["Please log in or sign up to continue."] }, status: :unauthorized
  end

  def not_found(obj)
    render json: { error: ["There is no such #{obj} in the database!"] }, status: :not_found
  end

  def invalid_response(invalid)
    render json: { error: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

end
