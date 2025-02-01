import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["menu"];

  connect() {
    this.isOpen = false;
  }

  toggle() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.menuTarget.classList.remove("-translate-x-full");
      this.menuTarget.classList.add("translate-x-0");
    } else {
      this.menuTarget.classList.remove("translate-x-0");
      this.menuTarget.classList.add("-translate-x-full");
    }
  }
}
