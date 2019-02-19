class UsersController < ApplicationController
  skip_before_action :authorize_request, only: :create  

  # POST '/signup'
  def create 
    # use create! method will raise RecordInvalid exception if credentials is invalid
    User.create!(user_params)
    response = { message: Message.account_created }
    json_response(response, :created)
  end

   private 
  def user_params
    params.permit(:first_name, :last_name, :email, :password, :password_confirmation,
                  :active, :role_id)
  end
end
