# == Schema Information
#
# Table name: houses
#
#  id          :bigint           not null, primary key
#  address     :string           not null
#  city_id     :integer          not null
#  state_id    :integer          not null
#  zipcode     :integer          not null
#  price       :integer          not null
#  beds        :integer          not null
#  baths       :integer          not null
#  sqft        :integer          not null
#  is_rent     :boolean          default(TRUE), not null
#  lat         :float            not null
#  lng         :float            not null
#  description :text
#  yr_built    :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class House < ApplicationRecord
  validates :address, :city_id, :state_id, :zipcode, :price, :beds, :baths, :sqft, :lat, :lng, presence: true
  validates :is_rent, inclusion: { in: [true, false] }

  belongs_to :city
  belongs_to :state

  has_many_attached :photos


  def self.in_bounds(params)
    bounds = params[:bounds]
    min_beds = params[:min_beds] && params[:min_beds] != "" ? params[:min_beds].delete("+ bd").to_i : 0
    min_baths = params[:min_baths] && params[:min_baths] != "" ? params[:min_baths].delete("+ ba").to_i : 0
    min_price = params[:min_price] && params[:min_price] != "" ? params[:min_price].delete("+").delete("$").to_i : 0
    max_price = params[:max_price] && params[:max_price] != "" ? params[:max_price].delete("~").delete("$").to_i : 100000000000
    self.where("lat < ?", bounds[:northEast][:lat])
    .where("lat > ?", bounds[:southWest][:lat])
    .where("lng > ?", bounds[:southWest][:lng])
    .where("lng < ?", bounds[:northEast][:lng])
    .where("beds >= ?", min_beds)
    .where("baths >= ?", min_baths)
    .where(price: (min_price..max_price))
    .distinct

  end

    def self.with_query(params)
    bounds = params[:bounds]
    query = params[:query]
    city = "%#{query.strip.split(//).join("%")}%"
    state = "%#{query.strip.split(//).join("%")}%"
    zipcode = query.to_i if query.match(/^\d+$/)

    if (city == "%%" && state == "%%" && zipcode == nil)
      return self.in_bounds(params)
    end

    if city == "%%"
      city_id = nil
    else
      city_id = City.where("UPPER(TRIM(name)) LIKE UPPER(?)", city).pluck(:id)[0]
    end

    if state == "%%"
      state_id = nil
    else
      state_id = State.where("UPPER(TRIM(name)) LIKE UPPER(?)", state).pluck(:id)[0]
    end

    if (zipcode.is_a?(Integer))
      minrange = zipcode - 30
      maxrange = zipcode + 30
    else
      minrange = nil
      maxrange = nil
    end

    return self.in_bounds(params).where("city_id=? OR state_id=? OR zipcode BETWEEN ? AND ?", city_id, state_id, minrange, maxrange)
    # helps prevent SQL injection attacks and improves query efficiency
  end

  end
