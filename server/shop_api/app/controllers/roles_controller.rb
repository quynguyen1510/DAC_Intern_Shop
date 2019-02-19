class RolesController < ApplicationController
  # GET '/roles'
  def index 
    @roles = Role.all
    json_response(@roles) 
  end

   # POST '/roles'
  def create 
    @role = Role.create!(role_params)
    json_response(@role, :created)
  end

   private

  def role_params
    params.permit(:role_name)
  end
end
