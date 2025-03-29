class PagesController < ApplicationController
  def home
  end

  def about
  end

  def our_story
  end

  def map
  end

  def rsvp
  end

  def invitation
  end

  def photos
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

  def dress_code
  end

  def video
  end
  def faqs
    @faqs = [
      {
        question: "What is the date and time of the wedding?",
        answer: "The wedding will take place on July 5,2025 (Saturday) at 2:00pm."
      },
      {
        question: "What time should I arrive for the ceremony?",
        answer: "Please plan to arrive at least 15-30 minutes before the ceremony begins to allow time for seating."
      },
      {
        question: "Where will the wedding take place?",
        answer: "The ceremony will be held at Parish of the Immaculate Heart of Mary (PIHM) located at Daang Bakal Road, Brgy. Dela Paz, Antipolo City. The reception will follow at Sitio Elena Events Venue , which is located at 3B Sitio Elena Events Venue Don Celso Tuazon Ave Valley Golf Ortigas Ext., Cainta."
      },
      {
        question: "What is the dress code?",
        answer: "The dress code is [formal/semi-formal/cocktail attire], and we’d love for our guests to embrace a pastel color palette. Think soft shades like blush pink, lavender, baby blue, mint green, pastel orange or light yellow. We can’t wait to see everyone looking fabulous in these dreamy hues! Feel free to reach out if you have any questions about what to wear."
      },
      {
        question: "When should I RSVP by?",
        answer: "Please RSVP by June 5,2025 so we can finalize our guest list and arrangements."
      },
      {
        question: "Can I bring a plus-one?",
        answer: "We’d love to accommodate everyone, but due to space and budget constraints, only those listed on your invitation are invited."
      },
      {
        question: "Is parking available at the venue?",
        answer: "Yes, there is ample parking available on-site. Additionally, there is street parking near the venue. Please note that street parking may be limited, so we recommend arriving early to secure a spot."
      },
      {
        question: "Do you have a gift registry?",
        answer: "Your presence at our wedding is the greatest gift of all! If you wish to give a gift, we would appreciate contributions to help us start our new life together or fund our honeymoon."
      },
      {
        question: "How do I RSVP?",
        answer: "You can scan or click on the QR Code below.",
        add_qr: true
      },
      {
        question: "Who should I contact if I have more questions?",
        answer: "Feel free to email us at ellarepre@gmail.com or call us at 09171681993. We’re happy to help!"
      }
    ]
  end
end
