class CoursesController < ApplicationController

  def index
  end
  
  def show
  end
  
  def create
  end
  
  def update
  end

  def destroy
  end

  private

  def course_params
    params.permit(:name, :location)
  end
  
end
