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
  
  def courses
    object.courses.map{ |c| 
      { 
        id: c.id,
        holes: c.holes,
        name: c.name,
        location: c.location,
        best: c.personal_best(object.id)
      }
    }
  end
    

  # class CourseSerializer < ActiveModel::Serializer
  #   attributes :name, :location, :best

  #   def best
  #     Score.where()
  #     object.scores.where(user_id: session[:user_id]).map{ |s| s.strokes - s.par }.min
  #   end
  # end
end
