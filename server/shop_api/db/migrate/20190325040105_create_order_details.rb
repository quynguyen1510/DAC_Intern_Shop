class CreateOrderDetails < ActiveRecord::Migration[5.2]
  def change
    create_table :order_details do |t|
      t.integer :quantity
      t.belongs_to :product, index: true
      t.belongs_to :order, index: true

      t.timestamps
    end
  end
end
