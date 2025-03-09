import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  connect() {
    console.log("use jquery")
    $(".flip-book").turn({
      width: 900,
      height: 640,
      autoCenter: true
    })
  }
}