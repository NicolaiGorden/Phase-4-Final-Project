Rails.application.routes.draw do
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get "/me", to:"users#show"

  get "games/trending", to:"games#trending"

  get "games/search/:query", to:"games#search"

  resources :users, only: [:index, :create, :show]
  resources :games, only: [:index]
  resources :reviews, only: [:index]

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
