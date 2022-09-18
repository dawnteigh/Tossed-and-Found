Rails.application.routes.draw do
  
  resources :messages, only: [:create, :index]
  resources :discs, only: [:create, :index, :update, :destroy]
  resources :users, only: [:update]
  resources :scores, only: [:create, :index, :destroy]
  resources :courses, only: [:create, :index]

  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  post "/found", to: "discs#tossed_and_found"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  
end
