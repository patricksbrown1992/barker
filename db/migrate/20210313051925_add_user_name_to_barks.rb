class AddUserNameToBarks < ActiveRecord::Migration[5.2]
  def change
    add_column :barks, :username, :string
  end
end
