ADMIN_ROLE = "admin"
module UserHelper
  def is_admin?(user)
    user.role.role_name == ADMIN_ROLE
  end

  def correct_user?(current_user, logged_in_user)
    current_user.id.to_i == logged_in_user.id.to_i 
  end
end