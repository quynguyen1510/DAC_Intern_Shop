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
    @order_details = @order.order_detail.create!(quantity: 1, product_id: 128)
    response = {
      order: @order,
      order_details: @order_details,
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
      params.permit(:user_id, :status, :total)
    end 

    def update_params
      params.permit(:status)
    end

    def get_order
      @order = Order.find(params[:id])
    end
end
