Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"
  
  namespace :api, defaults: {format: :json} do
    get 'barks/get10', to: 'barks#get10'
    resources :users, only: [:create, :show]
    resource :session, only: [:destroy, :create]
    resources :barks, only: [:index, :create, :destroy, :update]
  end

end
