module Response 
  # helper method is responsible to return result as json format
  def json_response(object, status = :ok)
    render json: object, status: status 
  end
end