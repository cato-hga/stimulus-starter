import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static values = { index: Number }
  static targets = [ "slide" ]

  next() {
    this.indexValue++
  }

  previous() {
    this.indexValue--
  }

  indexValueChanged() {
    this.showCurrentSlide()
  }

  showCurrentSlide() {
    this.slideTargets.forEach((element, index) => {
      element.hidden = index !== this.indexValue
    })
  }
}