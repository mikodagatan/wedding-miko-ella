import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["map"];  // Target the map div

  connect() {
    this.initMap();  // Initialize the map when the controller is connected
  }

  initMap() {
    const mapOptions = {
      center: { lat: 14.597576, lng: 121.160353 }, 
      zoom: 18,
    };

    this.map = new google.maps.Map(this.mapTarget, mapOptions);

    const marker = new google.maps.Marker({
      position:  { lat: 14.597576, lng: 121.160353 },
      map: this.map,
      title: 'Parish of Immaculate Heart of Mary, Antipolo',
    });
  }
}