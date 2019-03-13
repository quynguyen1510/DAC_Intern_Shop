class ChangeStatusToBeBooleanInCampaigns < ActiveRecord::Migration[5.2]
  def change
    change_column :campaigns, :status, 'boolean USING CAST(status AS boolean)'
  end
end
