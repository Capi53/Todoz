Rails.application.routes.draw do
  devise_for :users
  resources :boards
  # get 'users/new'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # get '/users/:id', to:'users#show'
  # root "users#show"
  get '/user/:id' => 'users#show'
end
