class Campaign < ApplicationRecord
  belongs_to :user
  scope :activated, -> {where status: "Active"}
end
