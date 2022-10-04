class CoursesController < ApplicationController

  def index
    render json: Course.all, status: :ok
  end
  
  # def show
  #   if current_user
  #     course = Course.find_by(id: params[:id])
  #     if course
  #       render json: course, status: :ok
  #     else
  #       not_found "course"
  #     end
  #   else
  #     unauthorized
  #   end
  # end
  
  def create
    course = Course.create!(course_params)
    render json: course, status: :created
  end
  
  # def update
  #   if current_user
  #     course = Course.find_by(id: params[:id])
  #     if course
  #       course.update!(course_params)
  #       render json: course, status: :ok
  #     else
  #       not_found "course"
  #     end
  #   else
  #     unauthorized
  #   end
  # end

  # def destroy
  #   if current_user
  #     course = Course.find_by(id: params[:id])
  #     if course
  #       course.destroy
  #       head :no_content
  #     else
  #       not_found "course"
  #     end
  #   else
  #     unauthorized
  #   end
  # end

  private

  def course_params
    params.permit(:name, :location, :holes)
  end
  
end
