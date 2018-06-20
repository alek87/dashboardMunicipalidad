class CreateTurista < ActiveRecord::Migration[5.2]
  def change
    create_table :turista do |t|
      t.string :mes
      t.integer :cantidad

      t.timestamps
    end
  end
end
