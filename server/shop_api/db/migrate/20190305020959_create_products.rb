class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :product_name
      t.string :product_img
      t.string :product_desc
      t.float :price
      t.boolean :active
      t.belongs_to :category, index: true
      t.belongs_to :user, index: true
      
      t.timestamps
    end
  end
end
