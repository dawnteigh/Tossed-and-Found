class CoursesController < ApplicationController

  def index
    if current_user
      render json: Course.all, status: :ok
    else
      unauthorized
    end
  end
  
  def show
    if current_user
      course = Course.find_by(id: params[:id])
      if course
        render json: course, status: :ok
      else
        not_found "course"
      end
    else
      unauthorized
    end
  end
  
  def create
    if current_user
      course = Course.create!(course_params)
      render json: course, status: :created
    else
      unauthorized
    end
  end
  
  def update
    if current_user
      course = Course.find_by(id: params[:id])
      if course
        course.update!(course_params)
        render json: course, status: :ok
      else
        not_found "course"
      end
    else
      unauthorized
    end
  end

  def destroy
    if current_user
      course = Course.find_by(id: params[:id])
      if course
        course.destroy
        head :no_content
      else
        not_found "course"
      end
    else
      unauthorized
    end
  end

  private

  def course_params
    params.permit(:name, :location)
  end
  
end
