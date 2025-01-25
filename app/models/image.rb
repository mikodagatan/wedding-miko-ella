class Image < ApplicationRecord
  has_one_attached :image do |attachable|
    attachable.variant(:thumbnail, resize_to_limit: [ 350, 350 ], format: :webp, saver: { subsample_mode: "on", strip: true, interlace: true, quality: 100 })
  end

  def self.set_landscape
    all.each do |image|
      image.set_landscape
    end
  end

  def set_landscape
    io = image.download

    # Use ruby-vips to process the image and get the dimensions
    vips = Vips::Image.new_from_buffer(io, "")

    self.landscape = vips.width > vips.height
    self.save
  end
end
