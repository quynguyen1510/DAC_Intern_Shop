class OrderDetailsController < ApplicationController
    # GET '/order_details'
  def index
    @order_details = OrderDetail.all
    json_response({
        order_details: @order_details
    }) 
  end
end
