class ScoreSerializer < ActiveModel::Serializer
  attributes :id, :strokes, :par, :player, :created_at, :course
  belongs_to :user
end
