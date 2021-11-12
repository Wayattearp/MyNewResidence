# == Route Map
#

Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
    root to: "static_pages#root"

   namespace :api, defaults: { format: :json } do
      resources :users, only: [:create, :show, :update]
      resources :cities, only: [:index]
      resources :states, only: [:index]
      resource :session, only: [:create, :destroy, :show]
  end
end
