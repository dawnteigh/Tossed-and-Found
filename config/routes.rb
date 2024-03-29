Rails.application.routes.draw do
  scope '/api' do
    resources :messages, only: [:create]
    resources :discs, only: [:create, :update, :destroy]
    resources :users, only: [:update]
    resources :scores, only: [:create, :destroy]
    resources :courses, only: [:create, :update, :index]

    get "/me", to: "users#show"
    post "/signup", to: "users#create"
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"
    post "/found", to: "discs#tossed_and_found"
  end
    # Routing logic: fallback requests for React Router.
    # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
