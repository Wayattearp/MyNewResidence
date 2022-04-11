# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require "faker"

User.delete_all
House.delete_all
City.delete_all
State.delete_all


newyork = City.create!(name: "new york")
brooklyn = City.create!(name: "brooklyn")
queens = City.create!(name: "queens")
bronx = City.create!(name: "bronx")
cities = [newyork, brooklyn, queens, bronx]
descriptions = [
  "best deal in market"
]

ny = State.create!(name: "NY")
zipcodes = [
  10001,
  10002,
  10003,
  10004,
  10005,
  10006,
  10007,
  10008,
  10009,
  10010,
  10011,
  10012,
  10013,
  10014,
  10015,
  10016,
  10017,
  10018,
  10019,
  10020,
  10021,
  10022,
  10023,
  10024,
  10025,
  10026,
  10027,
  10028,
  10029,
  10030,
  10031,
  10032,
  10033,
  10034,
  10035,
  10036,
  10037,
  10038,
  10038,
  10039,
  10040,
  10041,
  10044,
  10045,
  10048,
]

10.times do |i|
  house = House.new
  house.lat = 40.746809 + rand(0.005..0.04) * [1, -1].sample
  house.lng = -73.987422 + rand(0.005..0.04) * [1, -1].sample
  house.address = Faker::Address.street_address
  house.city_id = cities.sample.id
  house.city = cities.sample
  house.state_id = ny.id
  house.state = ny
  house.zipcode = zipcodes.sample
  house.price = rand(1500..10000) / 100 * 100
  house.beds = rand(1..6)
  house.baths = rand(1..5)
  house.sqft = rand(400..5000) / 10 * 10
  house.is_rent = true
  house.description = descriptions.sample
house.save!
end

demoUser = User.create!(username: "DemoUser", password: "password148");
demoUser.save!