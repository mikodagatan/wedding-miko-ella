import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  scrollTo(event) {
    console.log('scroll into view')

    event.preventDefault();
    const id = this.element.getAttribute('href')
    const element = document.querySelector(id)
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
