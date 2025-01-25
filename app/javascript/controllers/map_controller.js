import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["map"];  // Target the map div

  connect() {
    this.initMap();  // Initialize the map when the controller is connected
  }

  initMap() {
    const mapOptions = {
      center: { lat: 40.730610, lng: -73.935242 }, // Default coordinates (New York City)
      zoom: 12,
    };

    this.map = new google.maps.Map(this.mapTarget, mapOptions);

    const marker = new google.maps.Marker({
      position: { lat: 40.730610, lng: -73.935242 },
      map: this.map,
      title: 'New York City',
    });
  }
}