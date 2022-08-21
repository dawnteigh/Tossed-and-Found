class MessageSerializer < ActiveModel::Serializer
  attributes :id, :subject, :body, :to, :created_at
  has_one :user
end
