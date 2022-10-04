# Controller logic: fallback requests for React Router.
# Leave this here to help deploy your app later!
class FallbackController < ActionController::Base
  skip_before_action :authorize
  def index
    # React app index page
    render file: 'public/index.html'
  end
end
