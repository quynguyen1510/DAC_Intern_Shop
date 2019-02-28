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
    @current_user = (AuthorizeApiRequest.new(request.headers).call)[:user]
  end
end
