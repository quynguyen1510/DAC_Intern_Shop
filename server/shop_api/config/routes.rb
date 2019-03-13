Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :roles 
  resources :users
  resources :categories
  resources :products
  resources :campaigns

  post 'auth/login', to: 'authentication#authenticate'
  get 'authenticate/profile', to: 'users#get_authenticate_user'
  get 'collection/users/size', to: 'users#get_total_user'
  put 'auth/logout', to: 'authentication#logout'
  #entry point for api on heroku
  get '/', to: 'application#home'

  # get product by categoryid
  get '/categories/:category_id/products', to: 'products#get_product_by_category'

  # search product by product_name
  get 'search/products/:product_name', to: 'products#search_product_by_name'
end
