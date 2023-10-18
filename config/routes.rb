Rails.application.routes.draw do
  post "/login", to: "sessions#create"
  get "/me", to:"users#show"
  delete "/logout", to: "sessions#destroy"

  resources :users, only: [:index, :create]

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
