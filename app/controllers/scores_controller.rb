class ScoresController < ApplicationController

  # def index
  #   render json: current_user.scores.sort_by{ |s| s.created_at }.reverse, include: :course, status: :ok
  # end

  def create
    score = current_user.scores.create!(score_params)
    render json: score, status: :created
end

#   def update
#     score = current_user.scores.find_by(id: params[:id])
#     if score
#       score.update!(score_params)
#       render json: score, status: :ok
#     else
#       not_found "score"
#     end
# end

  def destroy
    score = current_user.scores.find_by(id: params[:id])
    if score
      score.destroy
      head :no_content
    else
      not_found "score"
    end
  end

  private

  def score_params
    params.permit(:strokes, :par, :course_id, :player)
  end

end
