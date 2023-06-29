class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :messages
  has_many :scores
  has_many :discs
  has_many :courses
  has_many :messages

  def username
    object.username.capitalize
  end
  
  def messages
    msgs = object.messages + Message.where(to: username)
    ordered_msgs = msgs.sort_by{ |msg| msg.created_at }
    ordered_msgs
  end
  
  def courses
    object.courses.map{ |c| 
      { 
        id: c.id,
        holes: c.holes,
        name: c.f_name,
        location: c.f_location,
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
