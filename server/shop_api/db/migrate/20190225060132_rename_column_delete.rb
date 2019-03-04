class RenameColumnDelete < ActiveRecord::Migration[5.2]
  def change
    rename_column :categories, :delete, :active
  end
end
