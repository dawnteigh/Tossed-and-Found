class ScoresController < ApplicationController

  def index
  end

  def create
  end

  def update
  end

  def destroy
  end

  private

  def score_params
    params.permit(:strokes, :par, :course_id)
  end
  
end
