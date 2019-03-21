class Campaign < ApplicationRecord
  belongs_to :user
  validates :name, presence: true
  validates :budget, presence: true
  validates :bid, presence: true, numericality: {greater_than_or_equal_to: 10}
  validates :startdate, presence: true
  validates :enddate, presence: true
  scope :activated, -> {where status: "Active"}
end
