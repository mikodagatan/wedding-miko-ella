import { Controller } from "@hotwired/stimulus"
import { gsap } from "gsap"

export default class extends Controller {
  connect() {
    console.log('animation connected')
    const timeline = gsap.timeline({
      defaults: {
        duration: 1,
        ease: "power1.inOut"
      },
      onComplete: () => {
        // Remove the hidden class after the first timeline completes
        const slide1 = document.getElementById("our_story")
        slide1.classList.remove("hidden")

        slide1.scrollIntoView({ behavior: 'smooth', block: 'start' })

        // Start the second timeline
        timeline2.play()
      }
    })

    // Define each step in the animation
    timeline
      .to("#loading_screen", { opacity: 1, duration: 3, y: 0 })
      .to("#loading-spinner", { opacity: 1, duration: 1 })
      .to("#loading-spinner", { opacity: 0, duration: 1, delay: 1 })

    const timeline2 = gsap.timeline({ paused: true })

    timeline2
      .to("#ella1", { opacity: 1, x: 0, duration: 0.5, ease: "none" })
      .to("#text1", { opacity: 1, x: 0, duration: 0.5, ease: "sine.inOut" })
      .to("#ella2", { opacity: 1, x: 0, duration: 0.5, ease: "none" })
      .to("#text2", { opacity: 1, x: 0, duration: 0.5, ease: "sine.inOut" })




  }
}
