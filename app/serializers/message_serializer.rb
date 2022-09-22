class MessageSerializer < ActiveModel::Serializer
  attributes :id, :subject, :body, :to, :created_at
  belongs_to :user
end
