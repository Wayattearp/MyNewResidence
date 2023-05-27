# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


require "open-uri"
require "faker"

User.delete_all
House.delete_all
City.delete_all
State.delete_all


demoUser = User.create!(username: "DemoUser", password: "password148")
demoUser.save!

manhattan = City.create!(name: "Manhattan")
brooklyn = City.create!(name: "Brooklyn")
queens = City.create!(name: "Queens")
bronx = City.create!(name: "Bronx")
fortlee = City.create!(name: "Fort Lee")
edgewater = City.create!(name: "Edgewater")
unioncity = City.create!(name: "Union City")

descriptions = [
  "Luxurious Colonial features impeccable finishes throughout, from beautiful, original hardwood floors, to a gorgeous antique marble fireplace. The updated interiors feature a soft monochromatic palette and clean lines, and outside, the beautiful, landscaped lot is the work of the popular landscape architecture firm Richards Hooper.",
  "Fully-renovated brick row home features heart pine hardwood floors and a full smart home system including a Nest thermostat and a Ring doorbell. In the chef’s kitchen, there are stainless steel Bosch appliances, travertine waterfall counters, and a Breville espresso machine. And upstairs, the ensuite master bath features twin Grohe basins.",
  "Oversized south facing windows provide an airy feel and abundance of natural light. Open floor plan, hardwood floors throughout and soaring 12ft ceilings finish this chic urban space. Adams Square is the perfect blend of historic and modern with stunning architectural features complete with an elevator, a spacious gym and parking in a desirable urban neighborhood with parks, restaurants, schools, shops, and transit just steps from your door!", "Sun-drenched, bedrooms with 2 car tandem, garage parking! This boutique elevator building was constructed in 2017 with a 5-year Tax-Abatement (started in 2020). Condo highlights an open concept floor plan with modern finishes and partial NYC views. The chef's kitchen features SS appliances, quartz countertops, classic subway tiles, and a breakfast bar. Both bedrooms are bright and airy and located on opposite sides for added privacy. Additional features include improved access to the primary bedroom, large windows with Hunter Douglas blinds, wide plank hardwood floors throughout, in-unit Samsung washer/dryer, Carrera marble in bathrooms, a plethora of closets, and central AC/Heat. 1901 Summit Ave is a pet-friendly building with a secure mail room. Steps from direct bus/jitney to NYC for an easy commute. Located near historical St. Michael's enclave/sports fields and a close drive to the waterfront, Hoboken/Weehawken, Whole Foods, Trader Joe's, and JFK Blvd East with breathtaking NYC views. High WalkScore and close proximity to restaurants (Chofi Birria taqueria), shopping, groceries, and more!", "Awash in beautiful light, striking views await at this newly renovated and meticulously maintained home currently used as a 2 bedroom at the Clinton Hill Coops! With western and southern exposures, it's six over-sized windows bring the outside in and provide the perfect vantage point sweeping over the historic brownstones and treetops of the charming neighborhood to the stunning Manhattan skyline.The flexible layout has been thoughtfully designed to maximize the generous space and is freshly painted throughout. A classic entry foyer and hallways incorporate new Shaker-style doors for the 3 large storage closets. It opens to an airy living room that easily accommodates a separate dining area.",
  "This modern residence offers inspiring spaces and an exceptional amount of outdoor space. The great room features cathedral ceilings, multiple exposures, and a custom chandelier, while the updated kitchen boasts quartz countertops and Wolfe stainless steel appliances, and opens via double doors onto a massive wooden deck that overlooks the backyard koi pond."
]

ny = State.create!(name: "New York");
nj = State.create!(name: "New Jersey");
states = [ny, nj];

manhattanz = [10000, 10001, 10002, 10003, 10004, 10005, 10048]

brooklynz = [11201, 11202, 11203, 11204, 11205, 11206, 11207, 11208, 11209, 11210, 11211, 11212, 11213, 11214, 11215 ]

bronxz = [10467, 10456, 10458, 10453, 10457, 10452, 10468,
10469, 10462, 10466, 10463, 10472, 10460, 10473]

queensz = [11004 , 11004, 11005, 11101, 11101, 11102, 11102, 11103, 11103, 11104, 11104, 11104, 11105, 11105, 11106,
11106, 11109, 11351, 11352, 11354, 11355, 11356, 11356, 11357, 11357, 11357, 11358, 11359, 11359, 11359, 11360, 11360, 11361, 11361, 11362, 11362, 11362, 11363, 11363]

fortleez = [7024, 7010, 7605]
edgewaterz = [7020, 7086]
unioncityz = [7087]

nyzipcodes = ['Manhattan', 'Brooklyn', 'Queens', 'Bronx']
njzipcodes = ['Fort Lee', 'Edgewater', 'Union City']

# rents
num_rents = 1
20.times do |i|
  house = House.new
  house.state = states.sample
  if house.state == ny 
    house.state_id = ny.id
    zipcode = nyzipcodes.sample
    case zipcode
      when 'Manhattan'
        house.zipcode = manhattanz.sample
           house.lat = rand(40.7640..40.8009)
           house.lng = rand(-73.9814..-73.9584)
            house.city_id = manhattan.id
            house.city = manhattan
      when 'Brooklyn'
        house.zipcode = brooklynz.sample
          house.lat = rand(40.5700..40.7300)
          house.lng = rand(-74.0500..-73.8500)
          house.city_id = brooklyn.id
          house.city = brooklyn
      when 'Queens'
        house.zipcode = queensz.sample
        house.lat = rand(40.5400..40.8000)
        house.lng = rand(-73.9600..-73.7000)
        house.city_id = queens.id
        house.city = queens
      when 'Bronx'
        house.zipcode = bronxz.sample
        house.lat = rand(40.7850..40.9300)
        house.lng = rand(-73.9300..-73.8000)
        house.city_id = bronx.id
            house.city = bronx
      end
    else 
      house.state_id = nj.id
      zipcode = njzipcodes.sample
    case zipcode
      when 'Fort Lee'
        house.zipcode = fortleez.sample
        house.lat = rand(40.8419..40.8684)
        house.lng = rand(-73.9917..-73.9686)
        house.city_id = fortlee.id
        house.city = fortlee
      when 'Edgewater'
        house.zipcode = edgewaterz.sample
        house.lat = rand(40.8000..40.8200)
        house.lng = rand(-74.0100..-73.9900)
        house.city_id = edgewater.id
        house.city = edgewater
      when 'Union City'
        house.zipcode = unioncityz.sample
        house.lat = rand(40.7515..40.7631)
        house.lng = rand(-74.0536..-74.0236)
        house.city_id = unioncity.id
        house.city = unioncity
      end
  end
  house.address = Faker::Address.street_address
  house.price = rand(1500..10000) / 100 * 100
  house.beds = rand(1..6)
  house.baths = rand(1..5)
  house.sqft = rand(400..5000) / 10 * 10
  house.is_rent = true
  house.description = descriptions.sample

  outside_photo_num = num_rents
  bathroom_photo_num = num_rents
  bedroom_photo_num = num_rents
  kitchen_photo_num = num_rents

  num_rents+=1

  outside = URI.open("https://my-new-residence-seeds.s3.amazonaws.com/outside/#{outside_photo_num}.jpeg")
  bath = URI.open("https://my-new-residence-seeds.s3.amazonaws.com/bathroom/#{bathroom_photo_num}.jpeg")
  bed = URI.open("https://my-new-residence-seeds.s3.amazonaws.com/bedroom/#{bedroom_photo_num}.jpeg")
  kitchen = URI.open("https://my-new-residence-seeds.s3.amazonaws.com/kitchen/#{kitchen_photo_num}.jpeg")

  outside_file = "outside#{outside_photo_num}.jpeg"
  bath_file = "bathroom#{bathroom_photo_num}.jpeg"
  bed_file = "bedrooom#{bedroom_photo_num}.jpeg"
  kitchen_file = "kitchen#{kitchen_photo_num}.jpeg"

  house.photos.attach(io: outside, filename: outside_file)
  house.photos.attach(io: bed, filename: bed_file)
  house.photos.attach(io: bath, filename: bath_file)
  house.photos.attach(io: kitchen, filename: kitchen_file)
  house.save!
end

# buys
num_buys = 20
20.times do |i|
  house = House.new
  house.state = states.sample
  if house.state == ny 
    house.state_id = ny.id
    zipcode = nyzipcodes.sample
    case zipcode
      when 'Manhattan'
        house.zipcode = manhattanz.sample
           house.lat = rand(40.7640..40.8009)
           house.lng = rand(-73.9814..-73.9584)
            house.city_id = manhattan.id
            house.city = manhattan
      when 'Brooklyn'
        house.zipcode = brooklynz.sample
          house.lat = rand(40.5700..40.7300)
          house.lng = rand(-74.0500..-73.8500)
          house.city_id = brooklyn.id
          house.city = brooklyn
      when 'Queens'
        house.zipcode = queensz.sample
        house.lat = rand(40.5400..40.8000)
        house.lng = rand(-73.9600..-73.7000)
        house.city_id = queens.id
        house.city = queens
      when 'Bronx'
        house.zipcode = bronxz.sample
        house.lat = rand(40.7850..40.9300)
        house.lng = rand(-73.9300..-73.8000)
        house.city_id = bronx.id
            house.city = bronx
      end
    else 
      house.state_id = nj.id
      zipcode = njzipcodes.sample
    case zipcode
      when 'Fort Lee'
        house.zipcode = fortleez.sample
        house.lat = rand(40.8419..40.8684)
        house.lng = rand(-73.9917..-73.9686)
        house.city_id = fortlee.id
        house.city = fortlee
      when 'Edgewater'
        house.zipcode = edgewaterz.sample
        house.lat = rand(40.8000..40.8200)
        house.lng = rand(-74.0100..-73.9900)
        house.city_id = edgewater.id
        house.city = edgewater
      when 'Union City'
        house.zipcode = unioncityz.sample
        house.lat = rand(40.7515..40.7631)
        house.lng = rand(-74.0536..-74.0236)
        house.city_id = unioncity.id
        house.city = unioncity
      end
  end
  house.address = Faker::Address.street_address
  house.price = rand(500000..10000000) / 5000 * 1000
  house.beds = rand(1..6)
  house.baths = rand(1..5)
  house.sqft = rand(400..5000) / 10 * 10
  house.is_rent = false
  house.description = descriptions.sample

  outside_photo_num = num_buys
  bathroom_photo_num = num_buys
  bedroom_photo_num = num_buys
  kitchen_photo_num = num_buys

  num_buys-=1

  bath = URI.open("https://my-new-residence-seeds.s3.amazonaws.com/bathroom/#{bathroom_photo_num}.jpeg")
  bed = URI.open("https://my-new-residence-seeds.s3.amazonaws.com/bedroom/#{bedroom_photo_num}.jpeg")
  kitchen = URI.open("https://my-new-residence-seeds.s3.amazonaws.com/kitchen/#{kitchen_photo_num}.jpeg")
  outside = URI.open("https://my-new-residence-seeds.s3.amazonaws.com/outside/#{outside_photo_num}.jpeg")

  bath_file = "bathroom#{bathroom_photo_num}.jpeg"
  bed_file = "bedrooom#{bedroom_photo_num}.jpeg"
  kitchen_file = "kitchen#{kitchen_photo_num}.jpeg"
  outside_file = "outside#{outside_photo_num}.jpeg"

  house.photos.attach(io: outside, filename: outside_file)
  house.photos.attach(io: bed, filename: bed_file)
  house.photos.attach(io: bath, filename: bath_file)
  house.photos.attach(io: kitchen, filename: kitchen_file)

  house.save!
end