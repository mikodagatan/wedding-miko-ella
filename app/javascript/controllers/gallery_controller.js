import { Controller } from "@hotwired/stimulus";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export default class extends Controller {
  connect() {
    Fancybox.bind("[data-fancybox]", {
      // Customize options here if needed
    });
  }
}