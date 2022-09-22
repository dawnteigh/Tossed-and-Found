class MessageSerializer < ActiveModel::Serializer
  attributes :id, :subject, :body, :to, :created_at, :from

  belongs_to :user
  
  def from
    object.user.username
  end
end
