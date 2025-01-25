import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["map"];  // Target the map div

  connect() {
    this.initMap();  // Initialize the map when the controller is connected
  }

  initMap() {
    const mapOptions = {
      center: { lat: 14.590142, lng: 121.135816 }, 
      zoom: 18,
    };

    this.map = new google.maps.Map(this.mapTarget, mapOptions);

    const marker = new google.maps.Marker({
      position:  { lat: 14.590142, lng: 121.135816 },
      map: this.map,
      title: 'Sitio Elena',
    });
  }
}