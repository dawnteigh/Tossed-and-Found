class ScoresController < ApplicationController

  def index
    if current_user
      render json: current_user.scores.sort_by{ |s| s.created_at }.reverse, include: :course, status: :ok
    else
      unauthorized
    end
  end

  def create
    if current_user
      score = current_user.scores.create!(score_params)
      render json: score, status: :created
    else
      unauthorized
    end
  end

  # def update
  #   if current_user
  #     score = current_user.scores.find_by(id: params[:id])
  #     if score
  #       score.update!(score_params)
  #       render json: score, status: :ok
  #     else
  #       not_found "score"
  #     end
  #   else
  #     unauthorized
  #   end
  # end

  def destroy
    if current_user
      score = current_user.scores.find_by(id: params[:id])
      if score
        score.destroy
        head :no_content
      else
        not_found "score"
      end
    else
      unauthorized
    end
  end

  private

  def score_params
    params.permit(:strokes, :par, :course_id, :player)
  end

end
