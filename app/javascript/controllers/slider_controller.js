import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["menu", "overlay", "scrollContainer"]

  connect() {
    this.isOpen = false;
    this.startX = 0;
    this.startY = 0;
    this.isHorizontal = false;
    this.isDragging = false; // Track mouse dragging state
  }

  // Start touch or mouse event
  start(event) {
    this.startX = event.touches ? event.touches[0].clientX : event.clientX;
    this.startY = event.touches ? event.touches[0].clientY : event.clientY;
    this.isHorizontal = false; // Reset for each new interaction
    this.isDragging = true; // Enable dragging state for mouse
  }

  mouseStart(event) {
    this.startX = event.touches ? event.touches[0].clientX : event.clientX;
    this.startY = event.touches ? event.touches[0].clientY : event.clientY;
    this.isHorizontal = false; // Reset for each new interaction
    this.isDragging = true; // Enable dragging state for mouse
  }

  // Detect swipe direction on touch or mouse move
  move(event) {
    if (!this.isDragging) return; // Only move if dragging

    const currentX = event.touches ? event.touches[0].clientX : event.clientX;
    const currentY = event.touches ? event.touches[0].clientY : event.clientY;
    const diffX = currentX - this.startX;
    const diffY = currentY - this.startY;

    // Detect vertical movement for scrolling
    if (Math.abs(diffY) > Math.abs(diffX)) {
      this.isHorizontal = false;
      this.scrollContainerTarget.scrollTop -= diffY; // Programmatic scroll
      this.startY = currentY; // Update startY for smooth scrolling
      return;
    }

    // Detect horizontal swipe
    if (Math.abs(diffX) > 10) {
      this.isHorizontal = true;
    }
  }

  mouseMove(event) {
    if (!this.isDragging) return; // Only move if dragging

    const currentX = event.touches ? event.touches[0].clientX : event.clientX;
    const currentY = event.touches ? event.touches[0].clientY : event.clientY;
    const diffX = currentX - this.startX;
    const diffY = currentY - this.startY;

    // Detect vertical movement for scrolling
    if (Math.abs(diffY) > Math.abs(diffX)) {
      this.isHorizontal = false;
      return
    }

    // Detect horizontal swipe
    if (Math.abs(diffX) > 10) {
      this.isHorizontal = true;
    }
  }

  // End touch or mouse event
  end(event) {
    if (this.isHorizontal) {
      const endX = event.changedTouches ? event.changedTouches[0].clientX : event.clientX;
      const diffX = endX - this.startX;

      if (diffX > 50 && !this.isOpen) {
        // Swipe right to open menu
        this.openMenu();
      } else if (diffX < -50 && this.isOpen) {
        // Swipe left to close menu
        this.closeMenu();
      }
    }

    this.isDragging = false; // Reset dragging state
  }

  mouseEnd(event) {
    if (this.isHorizontal) {
      const endX = event.changedTouches ? event.changedTouches[0].clientX : event.clientX;
      const diffX = endX - this.startX;

      if (diffX > 50 && !this.isOpen) {
        // Swipe right to open menu
        this.openMenu();
      } else if (diffX < -50 && this.isOpen) {
        // Swipe left to close menu
        this.closeMenu();
      }
    }

    this.isDragging = false; // Reset dragging state
  }

  // Open the menu
  openMenu() {
    this.isOpen = true;
    this.updateMenu();
  }

  // Close the menu
  closeMenu() {
    this.isOpen = false;
    this.updateMenu();
  }

  // Update menu state
  updateMenu() {
    if (this.isOpen) {
      this.menuTarget.classList.remove("-translate-x-full");
      this.menuTarget.classList.add("translate-x-0");
      this.overlayTarget.classList.remove("hidden");
    } else {
      this.menuTarget.classList.add("-translate-x-full");
      this.menuTarget.classList.remove("translate-x-0");
      this.overlayTarget.classList.add("hidden");
    }
  }
}
