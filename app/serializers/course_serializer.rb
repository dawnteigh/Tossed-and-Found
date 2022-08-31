class CourseSerializer < ActiveModel::Serializer
  attributes :id, :location, :name, :holes, :top_scores

  def top_scores
    object.scores.sort_by{ |c| c.strokes }.first(3)
  end
end
