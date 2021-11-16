class RemoveIdConstraint < ActiveRecord::Migration[6.1]
  def change
    change_column_null :cities, :house_id, true
    change_column_null :states, :house_id, true
  end
end
