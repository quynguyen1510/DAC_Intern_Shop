class AddNameToCampaigns < ActiveRecord::Migration[5.2]
  def change
    add_column :campaigns, :name, :string
  end
end
