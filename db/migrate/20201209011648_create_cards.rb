class CreateCards < ActiveRecord::Migration[5.2]
  def change
    create_table :cards do |t|
      t.string :name
      t.string :contents
      t.integer :board_id
      t.integer :created_by
      t.integer :updated_by

      t.timestamps
    end
  end
end
