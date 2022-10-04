class ScoreSerializer < ActiveModel::Serializer
  attributes :id, :strokes, :par, :player, :created_at, :course
  belongs_to :user

  def course
    c = object.course
    { 
        id: c.id,
        holes: c.holes,
        name: c.name,
        location: c.location,
        best: c.personal_best(object.user.id)
      }
    end
end
