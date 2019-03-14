class AuthenticateUser
  def initialize(email, password)
    @email = email
    @password = password
  end
  
  # entry point of service
  def call  
    payload = {
        user_id: user.id,
        role_id: user.role_id    
    }
    if (user)
      token = JsonWebToken.encode(payload)  
      user.update(token: token)
      return token
    end
  end
  
  private
  attr_reader :email, :password
  # verify credentials of user
  def user 
    user = User.find_by(email: email)
    return user if user && user.authenticate(password)
    #raise custom exception if user is not authenticate
    raise( ExceptionHandler::AuthenticationError, Message.invalid_credentials)
  end
end 