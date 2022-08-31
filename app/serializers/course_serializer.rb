class CourseSerializer < ActiveModel::Serializer
  attributes :id, :location, :name, :holes, :top_scores

  def top_scores
    object.scores.sort_by{ |s| s.strokes }.first(3)
  end
end
