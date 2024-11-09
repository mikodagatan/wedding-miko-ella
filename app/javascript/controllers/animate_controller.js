import { Controller } from "@hotwired/stimulus"
import { gsap } from "gsap"

export default class extends Controller {
  connect() {
    console.log("Hello, Stimulus!", this.element)
    const timeline = gsap.timeline()

    // Define each step in the animation
    timeline
      .to(this.element, { opacity: 1, duration: 0.5 })
      .to(this.element, { x: 100, duration: 0.5 })
      .to(this.element, { y: 100, duration: 0.5 })
      .to(this.element, { rotation: 360, duration: 0.5 })
  }
}