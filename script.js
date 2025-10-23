// Tab switching functionality
document.addEventListener("DOMContentLoaded", () => {
  const translations = {
    ru: {
      "feedback-title": "Ваше мнение важно для нас!",
      "feedback-description":
        "Мы просим всех участников пройти опрос и оставить свой отзыв. Ваше мнение поможет нам улучшить программу обучения.",
      "feedback-button": "Пройти опрос",
      "hero-title": "Service Training for Cadets",
      "hero-subtitle": "Обучающая программа департамента Customer Service",
      "hero-date": "Программа повышения квалификации наземного персонала Air Astana",
      "program-heading": "О программе",
      "program-p1":
        "<strong>Service Training for Cadets</strong> — это обучающая программа, разработанная департаментом Customer Service для новых членов команды Air Astana, проходящих стажировку в сфере обслуживания пассажиров. Тренинг направлен на развитие профессиональных и коммуникативных навыков, понимание стандартов сервиса авиакомпании и формирование культуры гостеприимства.",
      "program-p2":
        "В ходе программы участники узнают, как эффективно взаимодействовать с пассажирами, справляться со сложными ситуациями и демонстрировать высокий уровень клиентоориентированности в любой точке обслуживания. Особое внимание уделяется командной работе, ответственности и безопасности сервиса.",
      "program-p3":
        "Тренинг является обязательным этапом для кадетов, которые в будущем станут лицом Air Astana и будут обеспечивать комфорт и безопасность наших пассажиров на каждом этапе путешествия.",
      "trainers-title": "Наши эксперты-тренеры",
      "trainers-subtitle": "Познакомьтесь с лидерами отрасли, которые поделятся своим опытом и знаниями",
      "schedule-title": "Программа обучения",
      "tab-cadets": "Программа для кадетов",
      "schedule-heading": "Программа обучения кадетов",
      "schedule-subheading": "Тренинг по повышению качества обслуживания",
      "session1-title": "Приветствие и введение",
      "session1-subtitle": "Упражнение на знакомство",
      "session1-topic1": "Понимание причин выбора Air Astana в качестве работодателя",
      "session1-topic2": "Ключевые компоненты бренда",
      "session1-topic3": "Анализ профиля кадета и видео типичного рабочего дня",
      "session1-topic4": "Формат оценки в наземном обслуживании",
      "session2-title": "Компоненты бренда и ценности HEART",
      "session2-subtitle": "Понимание корпоративной культуры Air Astana",
      "session2-topic1": "Объяснение ценностей HEART",
      "session2-topic2": "Голос бренда, имидж и производительность",
      "session2-topic3": "Упражнение: портрет идеального кадета",
      "session2-topic4": "Видео: «Один день кадета наземного обслуживания»",
      break1: "Кофе-брейк",
      "session3-title": "Имидж бренда - Стандарты внешнего вида",
      "session3-topic1": "Стандарты внешнего вида и макияжа",
      "session3-topic2": "Требования к униформе и презентации",
      "session3-topic3": "Язык тела и профессиональные жесты",
      "session3-topic4": "Видео-демонстрации: прическа и макияж",
      "session3-topic5": "Упражнение: сигналы языка тела",
      "session4-title": "Голос бренда - Взаимодействие с клиентами",
      "session4-subtitle": "Эффективная коммуникация и качество обслуживания",
      "session4-topic1": "Понимание различных категорий клиентов",
      "session4-topic2": "Эмоциональный интеллект в общении",
      "session4-topic3": "Диалоги и стандарты обслуживания",
      "session4-topic4": "Особая помощь: беременные женщины, пожилые люди, WHCR, UNMR, PAC, DEAF/BLND",
      "session4-topic5": "Пассажиры бизнес-класса и статусные клиенты",
      "session4-topic6": "Упражнение: диалоги обслуживания с эмоциями",
      break2: "Обеденный перерыв",
      "session5-title": "Производительность бренда - Основные обязанности",
      "session5-topic1": "Управление очередями (международные и внутренние)",
      "session5-topic2": "Протоколы обслуживания и взаимодействия с клиентами",
      "session5-topic3": "Задачи операционной поддержки",
      "session5-topic4": "Процедуры до смены, до полета и после полета",
      "session5-topic5": "Помощь при регистрации и поддержка киосков",
      "session5-topic6": "Приоритетная посадка и контроль багажа",
      "session5-topic7": "Видео: демонстрация управления очередями",
      break3: "Кофе-брейк",
      "session6-title": "Понимание сложных клиентов",
      "session6-subtitle": "Управление задержками и сложными ситуациями",
      "session6-topic1": "Влияние задержек и отмен на эмоции клиентов",
      "session6-topic2": "Управление стрессом и эмоциональное заражение",
      "session6-topic3": "Действия во время задержек рейсов",
      "session6-topic4": "Предоставление ваучеров на питание и размещение",
      "session6-topic5": "Обработка ситуаций с видеозаписью",
      "session6-topic6": "Видео: «Эмоции заразительны»",
      "session7-title": "Ролевая практика",
      "session7-subtitle": "Тренинг на основе сценариев с индивидуальной обратной связью",
      "session7-topic1": "Сценарии обычных и сложных ситуаций",
      "session7-topic2": "Оценка коммуникативных навыков",
      "session7-topic3": "Проактивный подход к потребностям клиентов",
      "session7-topic4": "Видео самоанализ",
      "session7-topic5": "Индивидуальная обратная связь от тренера",
      "session8-title": "Заключительная сессия",
      "session8-subtitle": "Резюме и самостоятельное задание",
      "session8-topic1": "Резюме дня и ключевые выводы",
      "session8-topic2": "Важность постоянного развития навыков",
      "session8-topic3": "Самостоятельное задание: отслеживание роста в общении, управлении очередями и контроле толпы",
      "dates-title": "Расписание программы для кадетов 2024",
      "footer-text": "Service Training for Cadets - Программа повышения качества обслуживания клиентов",
      "trainer1-role": "Генеральный директор",
      "trainer1-bio":
        "Руководит Air Astana Group с более чем 20-летним опытом работы в авиационной отрасли, уделяя особое внимание операционному совершенству и культуре безопасности.",
      "trainer2-role": "Управляющий директор, главный консультант",
      "trainer2-bio":
        "Эксперт по расследованию авиационных происшествий с обширным опытом анализа аварий и написания отчетов о событиях безопасности.",
      "trainer3-role": "Менеджер по безопасности и нормативным вопросам",
      "trainer3-bio":
        "Специализируется на глобальном подходе Boeing к безопасности и процессах безопасности в эксплуатации на европейских и центральноазиатских рынках.",
      "trainer4-role": "Руководитель инженерного отдела",
      "trainer4-bio":
        "Руководит исследованиями и разработкой инновационных инструментов для расследования авиационных происшествий и анализа аварий.",
      "trainer5-role": "Архитектор безопасности и производительности",
      "trainer5-bio":
        "Эксперт в области обучения на основе данных о безопасности и методологий обучения на основе фактических данных для авиации.",
      "trainer6-role": "Капитан B787, генеральный менеджер по корпоративной безопасности",
      "trainer6-bio":
        "Опытный капитан, специализирующийся на осведомленности о психическом здоровье и программах поддержки коллег в авиационных операциях.",
      "trainer7-role": "Региональный директор по безопасности",
      "trainer7-bio":
        "Региональный эксперт по безопасности взлетно-посадочных полос и эксплуатации воздушных судов, обеспечивающий высочайшие стандарты безопасности парка Airbus.",
      "trainer8-role": "Управляющий директор",
      "trainer8-bio":
        "Специалист по управлению рисками методом «бабочка» и угрозам новых технологий для систем авиационной безопасности.",
    },
    en: {
      "feedback-title": "Your Opinion Matters to Us!",
      "feedback-description":
        "We kindly ask all participants to complete the survey and leave your feedback. Your opinion will help us improve the training program.",
      "feedback-button": "Take Survey",
      "hero-title": "Service Training for Cadets",
      "hero-subtitle": "Customer Service Department Training Program",
      "hero-date": "Air Astana Ground Service Excellence Training",
      "program-heading": "About the Program",
      "program-p1":
        "<strong>Service Training for Cadets</strong> is a training program developed by the Customer Service department for new Air Astana team members undergoing internships in passenger service. The training focuses on developing professional and communication skills, understanding airline service standards, and fostering a culture of hospitality.",
      "program-p2":
        "During the program, participants learn how to effectively interact with passengers, handle challenging situations, and demonstrate a high level of customer orientation at any service point. Special attention is paid to teamwork, responsibility, and service safety.",
      "program-p3":
        "The training is a mandatory stage for cadets who will become the face of Air Astana in the future and will ensure the comfort and safety of our passengers at every stage of their journey.",
      "trainers-title": "Our Expert Trainers",
      "trainers-subtitle": "Meet the industry leaders who will share their expertise and insights",
      "schedule-title": "Training Programs",
      "tab-cadets": "Cadet Training",
      "schedule-heading": "Cadet Training Program",
      "schedule-subheading": "Ground Service Excellence Training",
      "session1-title": "Welcome & Introduction",
      "session1-subtitle": "Icebreaker Exercise",
      "session1-topic1": "Understanding reasons for choosing Air Astana as employer",
      "session1-topic2": "Key components of the brand",
      "session1-topic3": "Cadet profile analysis and typical workday video",
      "session1-topic4": "Assessment format in ground service",
      "session2-title": "Brand Components & HEART Values",
      "session2-subtitle": "Understanding Air Astana's Corporate Culture",
      "session2-topic1": "HEART values explanation",
      "session2-topic2": "Brand Voice, Image, and Performance",
      "session2-topic3": "Portrait of an ideal Cadet exercise",
      "session2-topic4": 'Video: "One Day of Ground Services Cadet"',
      break1: "Coffee Break",
      "session3-title": "Brand Image - Grooming Standards",
      "session3-topic1": "Grooming standards and makeup guidelines",
      "session3-topic2": "Uniform requirements and presentation",
      "session3-topic3": "Body language and professional gestures",
      "session3-topic4": "Video demonstrations: hairstyle and makeup",
      "session3-topic5": "Exercise: Body language cues",
      "session4-title": "Brand Voice - Customer Interaction",
      "session4-subtitle": "Effective Communication & Service Excellence",
      "session4-topic1": "Understanding different customer categories",
      "session4-topic2": "Emotional intelligence in communication",
      "session4-topic3": "Service dialogues and standards",
      "session4-topic4": "Special assistance: Expectant mothers, elderly, WHCR, UNMR, PAC, DEAF/BLND",
      "session4-topic5": "Business class and status customers",
      "session4-topic6": "Exercise: Service Dialogs with emotions",
      break2: "Lunch Break",
      "session5-title": "Brand Performance - Main Duties & Responsibilities",
      "session5-topic1": "Queue management (International & Domestic)",
      "session5-topic2": "Customer service & interaction protocols",
      "session5-topic3": "Operational support tasks",
      "session5-topic4": "Before-shift, before flight, and after flight procedures",
      "session5-topic5": "Check-in assistance and kiosk support",
      "session5-topic6": "Priority boarding and baggage control",
      "session5-topic7": "Video: Queue Management demonstration",
      break3: "Coffee Break",
      "session6-title": "Understanding Challenging Customers",
      "session6-subtitle": "Managing Delays & Difficult Situations",
      "session6-topic1": "Impact of delays and cancellations on customer emotions",
      "session6-topic2": "Stress management and emotional contagion",
      "session6-topic3": "Actions during flight delays",
      "session6-topic4": "Providing meal vouchers and accommodations",
      "session6-topic5": "Handling video recording situations",
      "session6-topic6": 'Video: "Emotions are contagious"',
      "session7-title": "Role-Playing Practice",
      "session7-subtitle": "Scenario-Based Training with Individual Feedback",
      "session7-topic1": "Normal and challenging situation scenarios",
      "session7-topic2": "Communication skills assessment",
      "session7-topic3": "Proactive approach to customer needs",
      "session7-topic4": "Video self-reflection",
      "session7-topic5": "Individual trainer feedback",
      "session8-title": "Closure Session",
      "session8-subtitle": "Summary & Self-Assignment",
      "session8-topic1": "Day summary and key takeaways",
      "session8-topic2": "Importance of ongoing skill development",
      "session8-topic3": "Self-assignment: Track growth in communication, queue management, and crowd control",
      "dates-title": "2024 Cadet Programme Schedule",
      "footer-text": "Service Training for Cadets - Customer Service Excellence Program",
      "trainer1-role": "Chief Executive Officer",
      "trainer1-bio":
        "Leading Air Astana Group with over 20 years of aviation industry experience, focusing on operational excellence and safety culture.",
      "trainer2-role": "Managing Director, Principal Consultant",
      "trainer2-bio":
        "Expert in aviation safety investigations with extensive experience in accident analysis and safety event report writing.",
      "trainer3-role": "Manager of Safety & Regulatory Affairs",
      "trainer3-bio":
        "Specializes in Boeing's global safety approach and in-service safety processes across European and Central Asian markets.",
      "trainer4-role": "Head of Engineering Department",
      "trainer4-bio":
        "Leading research and development of innovative tools for aviation safety investigations and accident analysis.",
      "trainer5-role": "Safety & Performance Architect",
      "trainer5-bio":
        "Subject matter expert in safety data-driven learning and evidence-based training methodologies for aviation.",
      "trainer6-role": "B787 Captain, General Manager Corporate Safety",
      "trainer6-bio":
        "Experienced captain specializing in mental health awareness and peer support programs in aviation operations.",
      "trainer7-role": "Regional Safety Director",
      "trainer7-bio":
        "Regional expert in runway safety and aircraft operations, ensuring highest safety standards across Airbus fleet.",
      "trainer8-role": "Managing Director",
      "trainer8-bio":
        "Specialist in bowtie risk management and emerging technology threats to aviation safety systems.",
    },
  }

  let currentLang = "ru"

  function switchLanguage(lang) {
    currentLang = lang

    // Update all elements with data-translate attribute
    document.querySelectorAll("[data-translate]").forEach((element) => {
      const key = element.getAttribute("data-translate")
      if (translations[lang][key]) {
        element.innerHTML = translations[lang][key]
      }
    })

    // Update active language button
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.classList.remove("active")
      if (btn.getAttribute("data-lang") === lang) {
        btn.classList.add("active")
      }
    })

    // Save language preference
    localStorage.setItem("preferredLanguage", lang)
  }

  const savedLang = localStorage.getItem("preferredLanguage") || "ru"
  switchLanguage(savedLang)

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      const lang = this.getAttribute("data-lang")
      switchLanguage(lang)
    })
  })

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
