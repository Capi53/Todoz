Rails.application.routes.draw do
  resources :lists
  resources :cards
  devise_for :users
  resources :boards

  # root "users/sign_up"
  # get 'users/new'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # get '/users/:id', to:'users#show'
  # root "users#show"
  root "boards#index"

  #ユーザーのルーティング
  get '/user/:id' => 'users#show'

  #ボードのルーティング
  # get '/boards/index' => 'boards#index'

  get '/boards/:id' => 'boards#show'

  get '/boards/new/' => 'boards#new'

  get '/cards/new' => 'cards#new'

  get '/lists/new' => 'lists#new'
end
