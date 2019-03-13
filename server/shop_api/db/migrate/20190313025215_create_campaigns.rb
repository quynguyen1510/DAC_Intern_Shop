class CreateCampaigns < ActiveRecord::Migration[5.2]
  def change
    create_table :campaigns do |t|
      t.date :startdate
      t.date :enddate
      t.float :budget
      t.float :bid
      t.float :spend
      t.text :campaignimg
      t.string :status
      t.belongs_to :user, index: true

      t.timestamps
    end
  end
end
