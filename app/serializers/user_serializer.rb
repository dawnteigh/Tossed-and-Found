class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_many :scores
  has_many :discs
  has_many :messages
  has_many :courses

  def messages
    msgs = object.messages + Message.where(to: object.username)
    ordered_msgs = msgs.sort_by{ |msg| msg.created_at }
    ordered_msgs
  end
end
