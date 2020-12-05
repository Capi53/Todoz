Rails.application.routes.draw do
  # get 'users/new'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # get '/users/:id', to:'users#show'
  # root "users#show"
  get '/users/:id' => 'users#show'
end
