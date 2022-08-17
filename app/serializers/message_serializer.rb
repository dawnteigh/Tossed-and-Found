class MessageSerializer < ActiveModel::Serializer
  attributes :id, :text, :sender
  has_one :user
end
