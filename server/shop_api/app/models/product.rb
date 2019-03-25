class Product < ApplicationRecord
  belongs_to :category 
  belongs_to :user
  has_many :order_detail
  has_many :order, :through => :order_detail
   # validations
  validates_presence_of :product_name, :product_desc, :price
end
