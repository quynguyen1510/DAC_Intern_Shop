class OrdersController < ApplicationController
  before_action :get_order, only: [:update]
  skip_before_action :authorize_request, only: [:create]

    # GET '/orders'
  def index
    @orders = Order.all
    json_response({
        orders: @orders
    }) 
  end
    # POST '/orders'
  def create
    data = order_params
    @order = Order.create!(data)
    detail_list = []
    params[:products_list].each do |product_params|
      detail_list << @order.order_detail.create!(select_permited(product_params))
    end
    response = {
      order: @order,
      order_details: detail_list,
      message: Message.order_created 
    }
    json_response(response, :created)
  end
    #PUT '/orders/:id'
  def update
    @order.update(update_params)
    response = {
        order: @order,
        message: Message.order_updated
    }
    json_response(response)
  end

    private

    def order_params
      params.permit(:user_id, :status, :total, :products_list)
    end 

    def update_params
      params.permit(:status)
    end

    def get_order
      @order = Order.find(params[:id])
    end

    def select_permited(product_params)
      product_params.permit(:quantity, :product_id, :order_id)
    end
end
