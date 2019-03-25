class Order < ApplicationRecord
    belongs_to :user
    has_many :order_detail
    has_many :product, :through => :order_detail
    #validations
    validates_presence_of :user_id
    validates :total, presence: true ,  numericality: {greater_than: 0}
end
