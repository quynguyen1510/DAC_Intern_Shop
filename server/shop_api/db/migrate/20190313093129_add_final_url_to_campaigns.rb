class AddFinalUrlToCampaigns < ActiveRecord::Migration[5.2]
  def change
    add_column :campaigns, :final_url, :string
  end
end
