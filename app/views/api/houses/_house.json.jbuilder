json.extract! house, :id, :address, :zipcode, :beds, :baths, :sqft, :price, :lat, :lng, :description, :is_rent
json.city house.city.name
json.state house.state.name
