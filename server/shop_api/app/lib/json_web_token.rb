class JsonWebToken
  # secret key to encode and decode token
  HMAC_SECRET = "JOqkv9k82m3qfKOhgDQgtiGlTP4KUEt3cK6/HjJ0fEuePI7YEuQpbnI43WIWemZnnP+8wKmkJFl5PrIcBThD+6hmYzVcT6lToSJHSZKy7IIq3dyU3uzQZqJ6HTSWqVLAvA70VPF0+dd4jof/HmPj0/UrA/brC4E291J0Sg6pMPuiSuLjPxYCOMeVOSQ8ucKLwXptLgPaFbUy4dgTA/zjsHVIFgOa2zbXs3mgv+sbBnSvidGpCfh5s4rnLVFL0GM+ijmEgWmd4yLGftYfWbuVUuMzGWPzkOj2j7v6osgzVT6LmZrcQZvbybk9CizeyGuurLjXWJI36joNPtVHFcgReryihDipqoEIlKhJ4jhmZQyaiPs6kQXT+PxljAJ6LvPQ/HUxRb2YKlADLlxMmokhvYK+X8R/fF4RxyKA--2YKJ1bImBR23L5Ns--pJPAKHLbQ6jdmIFPNWzxMw=="  
 
  def self.encode(payload, exp = 24.hours.from_now)
    # set expiry to 24h from now
    payload[:exp] = exp.to_i 
    # sign token with secrect key
    JWT.encode(payload, HMAC_SECRET)
  end

  def self.decode(token)
    # get payload in first element of decoded array
    body = JWT.decode(token, HMAC_SECRET)[0]
    # return new hash with key is token
    HashWithIndifferentAccess.new body
    # rescue from all decode errors
  rescue JWT::DecodeError => e
    # raise custom error to be handled by custom handler
    raise ExceptionHandler::InvalidToken, e.message
  end
end