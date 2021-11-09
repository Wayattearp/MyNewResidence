class Api::HousesController < ApplicationController

    def index
        render :index
    end

    def show
         @house = House.find(params[:id])
    end
    
    def create
        @house = House.create!(house_params)
        render :show
    end
end
