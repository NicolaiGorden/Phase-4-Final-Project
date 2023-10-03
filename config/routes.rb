Rails.application.routes.draw do
  post "/login", to: "sessions#create"

  resources :users, only: [:show, :create]

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
