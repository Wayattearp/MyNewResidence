class Api::HousesController < ApplicationController

    def index
        @houses = House.all
        render :index
    end

    def show
         @house = House.find(params[:id])
    end
    
    def create
        @house = House.create!(house_params)
        render :show
    end


  def house_params
    params.require(:house).permit(:address, :city_id, :state_id, :zipcode, :price, :beds, :baths, :sqft, :is_rent, :lat, :lng, :description, :yr_built, :photo, photos: [])
  end
end
