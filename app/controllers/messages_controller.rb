class MessagesController < ApplicationController

  # def index
  #   msgs = current_user.messages + Message.where(to: current_user.username)
  #   ordered_msgs = msgs.sort_by{ |msg| msg.created_at }
  #   render json: ordered_msgs, status: :ok
  # end

  def create
    msg = current_user.messages.create!(msg_params)
    render json: msg, status: :created
  end

  private

  def msg_params
    params.permit(:subject, :body, :to)
  end
end
