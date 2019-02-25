module UserHelper
  def is_admin?(user)
     user.role.role_name == Constants.admin
  end

  def correct_user?(current_user, request_user)
     current_user.id.to_i == request_user.id.to_i 
  end
end