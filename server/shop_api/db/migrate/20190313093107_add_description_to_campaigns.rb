class AddDescriptionToCampaigns < ActiveRecord::Migration[5.2]
  def change
    add_column :campaigns, :description, :string
  end
end
