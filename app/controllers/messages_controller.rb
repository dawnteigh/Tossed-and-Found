class MessagesController < ApplicationController

  def index
    if current_user
      msgs = current_user.messages + Message.where(to: current_user.username).order("created_at DESC")
      render json: msgs, status: :ok
    else
      unauthorized
    end
  end

  def create
    if current_user
      msg = current_user.messages.create!(msg_params)
      render json: msg, status: :created
    else
      unauthorized
    end
  end

  private

  def msg_params
    params.permit(:subject, :body, :to)
  end
end
