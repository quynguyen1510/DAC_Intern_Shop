class ProductsController < ApplicationController
  before_action :only_admin_and_shop, only: [:create, :destroy, :update]
  before_action :get_product, only: [:show, :destroy, :update]
  before_action :get_category, only: [:get_product_by_category]
  before_action :get_user, only: [:get_product_by_shop]
  before_action :check_user, only: [:get_product_by_shop]
  skip_before_action :authorize_request, only: [:index, :show, :get_product_by_category, :search_product_by_name]

  # GET '/products'
  def index 
    @products = Product.all.order("id DESC").paginate(page: params[:page], per_page: Constants.product_per_page)
    result = Array.new
    @products.each do |product|
      tmp = Hash.new
      tmp[:id] = product.id
      tmp[:product_name] = product.product_name
      tmp[:product_img] = product.product_img
      tmp[:product_desc] = product.product_desc
      tmp[:price] = product.price
      tmp[:active] = product.active
      tmp[:category_name]= product.category.catname 
      tmp[:category_id] = product.category_id
      tmp[:user_id] = product.user_id
      result.push(tmp)
    end
    json_response(result) 
  end

  # POST '/products'
  def create
    data = product_params
    data[:active] = true 
    @product = Product.create!(data)
    response = {
      product: @product,
      message: Message.product_created 
    }
    json_response(response, :created)
  end

  # GET /products/:id 
  def show 
    json_response(@product)
  end

  # PUT /products/:id 
  def update 
    protected_params = Hash.new
    product_params.each do |attr_name, attr_value|
      protected_params[attr_name.to_sym] = attr_value unless attr_value.empty?
    end
    @product.update(protected_params)
    response = {
        product: @product,
        message: Message.product_updated
    }
    json_response(response)
  end

  # DELETE /products/:id 
  def destroy
    @product.update({active: false})
    json_response({
      message: "Product is unactive successfully"
    })
  end

  # GET /categories/:category_id/products
  def get_product_by_category
    json_response(@category.products)
  end

  def get_product_by_shop
    json_response(@user.products)
  end
  # GET search/products/:product_name
  def search_product_by_name
    @products = Product.where("product_name like ?", "%#{params[:product_name]}%")
    if @products.empty?
      response = {
        message: "Sorry can't find this item"
      }
    else
      response = {
        products: @products
      }
    end 

    json_response(response)
  end

  private

  def product_params
    params.permit(:product_name, :product_img, :product_desc, :price, :category_id, :user_id, :active)
  end

  def get_category
    @category = Category.find(params[:category_id])
  end

  def get_user
    @user = User.find(params[:user_id])
  end

  def get_product
    @product = Product.find(params[:id])
  end

  def only_admin_and_shop
    json_response({ message: "Don't have permission"}, :forbidden) unless is_admin?(@current_user) || is_shop?(@current_user)
  end

  def check_user
    json_response({ message: "Don't have permission"}, :forbidden) unless correct_user?(@current_user,@user)
  end
end
