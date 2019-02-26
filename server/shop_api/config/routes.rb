Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :roles 
  resources :users

  post 'auth/login', to: 'authentication#authenticate'
  get 'authenticate/profile', to: 'users#get_authenticate_user'
  get 'collection/users/size', to: 'users#get_total_user'
end
