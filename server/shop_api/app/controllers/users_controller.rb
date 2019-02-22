class UsersController < ApplicationController
  skip_before_action :authorize_request, only: :create  
  before_action :get_user, except: [:create, :index]
  before_action :both_current_user_and_admin, only: [:show, :update]
  before_action :only_admin, only: [:index, :destroy]

  # GET '/users'
  def index 
    # pagination
    @users = User.all.paginate(page: params[:page], per_page: 7)
    json_response(@users)
  end

  # GET /users/:id 
  def show 
    json_response(@request_user)
  end

  # POST '/signup'
  def create 
    # use create! method will raise RecordInvalid exception if credentials is invalid
    # add normal user role for signup user
    data = user_params
    normal_user = Role.find_by(role_name: Roles.user)
    data[:role_id] = normal_user.id
    data[:active] = true

    @user = User.create!(data)
    response = { 
      user: @user, 
      message: Message.account_created 
    }
    json_response(response, :created)
  end

  # PUT /users/:id 
  def update 
    @request_user.update(user_params)
    json_response({message: Message.update_succesffuly})
  end

  # DELETE /users/:id 
  def destroy
    @request_user.update_attribute("active", false)
    json_response({ message: Message.account_removed})
  end

  def get_authenticate_user
    json_response({current_user: @current_user})
  end
  private 
  # get user parameter
  def user_params
    params.permit(:first_name, :last_name, :email, :password, :password_confirmation)
  end

  # get request user
  def get_user
    @request_user = User.find(params[:id])
  end


  
  # only admin and current user has permission to do actions
  def both_current_user_and_admin
    json_response({ message: Message.dont_have_permission }, :forbidden) unless correct?
  end

  def correct?
    correct_user?(@current_user, @request_user) || is_admin?(@current_user)
  end

  # check user is admin or not
  def only_admin
    json_response({ message: Message.dont_have_permission}, :forbidden) unless is_admin?(@current_user)
  end
end
