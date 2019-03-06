class Product < ApplicationRecord
  belongs_to :category 
  belongs_to :user
   # validations
  validates_presence_of :product_name, :product_desc, :price
end
