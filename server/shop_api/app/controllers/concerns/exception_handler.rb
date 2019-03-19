module ExceptionHandler
  # providers the more graceful `include` method
  extend ActiveSupport::Concern
  # define custom error messages
  class AuthenticationError < StandardError; end
  class MissingToken < StandardError; end
  class InvalidToken < StandardError; end

  included do
    # define custom handlers
    rescue_from ActiveRecord::RecordInvalid, with: :four_twenty_two
    rescue_from AuthenticationError, with: :unauthorized_request
    rescue_from MissingToken, with: :four_twenty_two
    rescue_from InvalidToken, with: :four_twenty_two

    rescue_from ActiveRecord::RecordNotFound do |e|
      json_response({ message: e.message })
    end
  end

  private

  def four_twenty_two(e)
    json_response({ message: e.message})
  end

  def unauthorized_request(e)
    json_response({ message: e.message})
  end
end