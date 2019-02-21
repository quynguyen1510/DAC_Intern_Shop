class UsersController < ApplicationController
  skip_before_action :authorize_request, only: :create  

  # GET '/users'
  def index 
  end

  # POST '/signup'
  def create 
    # use create! method will raise RecordInvalid exception if credentials is invalid
    # add normal user role for signup user
    data = user_params
    data[:role_id] = 2

    @user = User.create!(data)
    response = { 
      user: @user, 
      message: Message.account_created 
    }
    json_response(response, :created)
  end

  private 
  def user_params
    params.permit(:first_name, :last_name, :email, :password, :password_confirmation)
  end

end
