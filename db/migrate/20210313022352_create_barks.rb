class CreateBarks < ActiveRecord::Migration[5.2]
  def change
    create_table :barks do |t|
      t.integer :user_id
      t.text :ruff, :limit => 140
      t.timestamps
    end
  end
end
