class ApplicationController < ActionController::API
  include ExceptionHandler
  include Response
  include UserHelper
  # called before every action in controllers
  before_action :authorize_request, except: :home

  attr_reader :current_user
  def home

  end
  private

  def authorize_request
    request_user = (AuthorizeApiRequest.new(request.headers).call)[:user]
    check_user_id = JsonWebToken.decode(request_user.token)[:user_id]
    @current_user = request_user if check_user_id == request_user.id
  end
end
