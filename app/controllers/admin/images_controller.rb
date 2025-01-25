class Admin::ImagesController < ApplicationController
  before_action :authenticate, only: [ :index ]
  def index
    @images = []
    landscape_images = Image.where(landscape: true).to_a
    portrait_images = Image.where(landscape: false).to_a

    until (landscape_images + portrait_images).size == 0
      3.times do
        @images << landscape_images.pop if landscape_images.size > 0
      end
      3.times do
        @images << portrait_images.pop if portrait_images.size > 0
      end
    end
  end

  def create
    if params[:files]
      params[:files].each do |file|
        next if file.blank?

        @image = Image.new
        @image.image.attach(file)
        @image.save
      end
      Image.set_landscape
      redirect_to admin_images_path, notice: "Images uploaded successfully."
    else
      redirect_to admin_images_path, alert: "Please select files to upload."
    end
  end

  private


  def authenticate
    # Replace 'secret_password' with an environment variable or other secure storage
    authenticate_or_request_with_http_basic("Restricted Access") do |username, password|
      username == "admin" && (password == ENV["PASSWORD"] || password == "secret_password")
    end
  end
end
