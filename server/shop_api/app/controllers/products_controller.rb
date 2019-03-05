class ProductsController < ApplicationController
  before_action :only_admin_and_shop, only: [:create, :destroy, :update]
  before_action :get_product, only: [:show, :destroy, :update]
  before_action :get_category, only: [:get_product_by_category]
  skip_before_action :authorize_request, only: [:index, :show, :get_product_by_category]

  # GET '/products'
  def index 
    @products = Product.all.order("id ASC").paginate(page: params[:page], per_page: Constants.product_per_page)
    json_response(@products) 
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
    @product.update(product_params)
    response = {
        product: @product,
        message: Message.product_updated
    }
    json_response(response)
  end

  # GET /categories/:category_id/products
  def get_product_by_category
    json_response(@category.products)
  end

  private

  def product_params
    params.permit(:product_name, :product_img, :product_desc, :price, :category_id, :user_id, :active)
  end

  def get_category
    @category = Category.find(params[:category_id])
  end

  def get_product
    @product = Product.find(params[:id])
  end

  def only_admin_and_shop
    json_response({ message: "Don't have permission"}, :forbidden) unless is_admin?(@current_user) || is_shop?(@current_user)
  end
end
