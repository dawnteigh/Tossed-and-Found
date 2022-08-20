Rails.application.routes.draw do
  
  resources :messages, only: [:create, :index]
  resources :discs, only: [:create, :show, :index, :update, :destroy]
  resources :users, only: [:create, :update]
  resources :scores, only: [:create, :index, :update, :destroy]
  resources :courses, only: [:create, :show, :index, :update, :destroy]

  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
