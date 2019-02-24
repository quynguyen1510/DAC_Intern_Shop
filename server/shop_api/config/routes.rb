Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :roles 
  resources :users

  post 'auth/login', to: 'authentication#authenticate'
  post 'signup', to: 'users#create'
  get 'authenticate/profile', to: 'users#get_authenticate_user'
end
