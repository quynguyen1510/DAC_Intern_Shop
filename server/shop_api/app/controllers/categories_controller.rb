class CategoriesController < ApplicationController
    before_action :only_admin, only: [:create, :destroy, :update]
    before_action :get_category, only: [:show, :update, :destroy]
  
  # GET '/categories'
  def index 
    @categories = Category.all
    json_response(@categories) 
  end

  # POST '/categories'
  def create
    data = category_params
    data[:active] = true 
    @category = Category.create!(data)
    response = {
      category: @category
    }
    json_response(response, :created)
  end

  # GET /categories/:id 
  def show 
    json_response(@category)
  end

  # DELETE /categories/:id 
  def destroy
    @category.update_attribute("active", false)
    json_response({ message: "Category removed"})
  end

  # PUT /categories/:id 
  def update 
    @category = Category.find(params[:id])
    @category.update(category_params)
    json_response(@category)
  end

   private

  def category_params
    params.permit(:catname, :active)
  end

  def get_category
    @category = Category.find(params[:id])
  end

   # check user is admin or not
   def only_admin
    json_response({ message: "Don't have permission"}, :forbidden) unless is_admin?(@current_user)
  end
end
