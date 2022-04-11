class Api::HousesController < ApplicationController

    def index
        @houses = bounds ? House.in_bounds(bounds) : House.all
        if params[:minPrice] && params[:maxPrice]
          @houses = @houses.where(price: price_range)
        end
        render :index
    end

    def show
         @house = House.find(params[:id])
    end
    
    def create
        city = "%#{params[:house][:city].strip.split(//).join("%")}%"
        state = "%#{params[:house][:state].strip.split(//).join("%")}%"
        city_id = City.where("UPPER(TRIM(name)) LIKE UPPER(?)", city).pluck(:id)[0]
        state_id = State.where("UPPER(TRIM(name)) LIKE UPPER(?)", state).pluck(:id)[0]

      if (!city_id)
        new_city = City.create!(name: city.split("%").join("").capitalize)
        city_id = new_city.id
       end

      if (!state_id)
        new_state = State.create!(name: state.split("%").join("").upcase)
        state_id = new_state.id
      end

        params[:house][:city_id] = city_id
        params[:house][:state_id] = state_id
        @house = House.new(house_params)

        if @house.save
          render :show
        else
          render json: @house.errors.full_messages, status: 422
        end
    end

  def price_range 
    (params[:minPrice]..params[:maxPrice])
  end

  def house_params
    params.require(:house).permit(
      :address, :city_id, :state_id,
      :zipcode, :price, :beds, :baths,
      :sqft, :is_rent, :lat, :lng,
      :description, :yr_built, :photo,
      photos: [])
  end

  def bounds
    params[:bounds]
  end

end
