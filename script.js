// Tab switching functionality
document.addEventListener("DOMContentLoaded", () => {
  const tabButtons = document.querySelectorAll(".tab-btn")
  const tabContents = document.querySelectorAll(".tab-content")

  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const targetTab = this.getAttribute("data-tab")

      // Remove active class from all buttons and contents
      tabButtons.forEach((btn) => btn.classList.remove("active"))
      tabContents.forEach((content) => content.classList.remove("active"))

      // Add active class to clicked button and corresponding content
      this.classList.add("active")
      document.getElementById(targetTab).classList.add("active")

      // Smooth scroll to schedule section
      document.querySelector(".schedule-section").scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    })
  })

  // Smooth scroll for survey button
  const surveyBtn = document.querySelector(".btn-survey")
  if (surveyBtn) {
    surveyBtn.addEventListener("click", (e) => {
      // If you want to prevent default link behavior and add custom logic
      // e.preventDefault();
      // Add your custom logic here
    })
  }

  // Add scroll animation for schedule items
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "0"
        entry.target.style.transform = "translateY(20px)"

        setTimeout(() => {
          entry.target.style.transition = "all 0.5s ease"
          entry.target.style.opacity = "1"
          entry.target.style.transform = "translateY(0)"
        }, 100)

        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  // Observe all schedule items
  const scheduleItems = document.querySelectorAll(".schedule-item")
  scheduleItems.forEach((item) => {
    observer.observe(item)
  })

  // Carousel functionality
  const carouselTrack = document.querySelector(".carousel-track")
  const prevBtn = document.querySelector(".carousel-btn.prev")
  const nextBtn = document.querySelector(".carousel-btn.next")
  const dotsContainer = document.querySelector(".carousel-dots")
  const trainerCards = document.querySelectorAll(".trainer-card")

  let currentIndex = 0
  const cardsPerView = 1
  const totalCards = trainerCards.length

  // Create navigation dots
  function createDots() {
    dotsContainer.innerHTML = ""
    const totalDots = totalCards

    for (let i = 0; i < totalDots; i++) {
      const dot = document.createElement("button")
      dot.classList.add("carousel-dot")
      dot.setAttribute("aria-label", `Go to slide ${i + 1}`)
      if (i === 0) dot.classList.add("active")

      dot.addEventListener("click", () => {
        currentIndex = i
        updateCarousel()
      })

      dotsContainer.appendChild(dot)
    }
  }

  // Update carousel position
  function updateCarousel() {
    const cardWidth = trainerCards[0].offsetWidth
    const gap = 24
    const offset = -(currentIndex * (cardWidth + gap))

    carouselTrack.style.transform = `translateX(${offset}px)`

    // Update dots
    const dots = document.querySelectorAll(".carousel-dot")
    dots.forEach((dot, index) => {
      dot.classList.remove("active")
      if (index === currentIndex) {
        dot.classList.add("active")
      }
    })

    // Update button states
    prevBtn.disabled = currentIndex === 0
    nextBtn.disabled = currentIndex >= totalCards - 1
  }

  // Previous button
  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--
      updateCarousel()
    }
  })

  // Next button
  nextBtn.addEventListener("click", () => {
    if (currentIndex < totalCards - 1) {
      currentIndex++
      updateCarousel()
    }
  })

  createDots()
  updateCarousel()

  let resizeTimer
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer)
    resizeTimer = setTimeout(() => {
      updateCarousel()
    }, 250)
  })

  // Touch/swipe support for mobile
  let touchStartX = 0
  let touchEndX = 0

  carouselTrack.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX
  })

  carouselTrack.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX
    handleSwipe()
  })

  function handleSwipe() {
    if (touchEndX < touchStartX - 50) {
      // Swipe left
      nextBtn.click()
    }
    if (touchEndX > touchStartX + 50) {
      // Swipe right
      prevBtn.click()
    }
  }
})
