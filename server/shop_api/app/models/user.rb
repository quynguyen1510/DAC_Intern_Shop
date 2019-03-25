class User < ApplicationRecord
  #encryted password using bcrypt
  has_secure_password
  # association
  belongs_to :role
  has_many :products
  has_many :campaigns
  has_many :orders
  # validations
  validates_presence_of :first_name, :last_name, :email, :password_digest
  validates_uniqueness_of :email
  validates :email, :format => { :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\Z/ }
end
