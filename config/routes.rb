Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Render dynamic PWA files from app/views/pwa/* (remember to link manifest in application.html.erb)
  # get "manifest" => "rails/pwa#manifest", as: :pwa_manifest
  # get "service-worker" => "rails/pwa#service_worker", as: :pwa_service_worker

  # Defines the root path route ("/")
  root "pages#home"
  get "/our_story", to: "pages#our_story"
  get "/faqs", to: "pages#faqs"
  get "/rsvp", to: "pages#rsvp"
  get "/invitation", to: "pages#invitation"
  get "/map", to: "pages#map"
  get "/photos", to: "pages#photos"
  get "/dress_code", to: "pages#dress_code"
  get "/video", to: "pages#video"

  namespace :admin do
    resources :images, only: [ :index, :create, :destroy ]
  end
end
