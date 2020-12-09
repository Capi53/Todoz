Rails.application.routes.draw do
  devise_for :users
  resources :boards
  # get 'users/new'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # get '/users/:id', to:'users#show'
  # root "users#show"

  #ユーザーのルーティング
  get '/user/:id' => 'users#show'

  #ボードのルーティング
  # get '/boards/index' => 'boards#index'

  get '/boards/detail/:id' => 'boards#show'

  get '/boards/new' => 'boards#new'
end
