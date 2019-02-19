class Role < ApplicationRecord
  # association
  has_many :users
  # validation
  validates_presence_of :role_name
end
